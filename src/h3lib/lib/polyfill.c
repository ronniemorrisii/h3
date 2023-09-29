/*
 * Copyright 2016-2021 Uber Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @file polyfill.c
 * @brief   Functions relating to the cell-to-polygon algorithm
 */

#include "polyfill.h"

#include <string.h>

#include "alloc.h"
#include "coordijk.h"
#include "h3Assert.h"
#include "h3Index.h"
#include "polygon.h"

// Factor by which to scale the cell bounding box to include all children.
// This was determined empirically by finding the smallest factor that
// passed exhaustive tests.
#define CHILD_SCALE_FACTOR 1.4

static const LatLng NORTH_POLE = {M_PI_2, 0};
static const LatLng SOUTH_POLE = {-M_PI_2, 0};

/**
 * For a given cell, return its bounding box. If coverChildren is true, the bbox
 * will be guaranteed to contain its children at any finer resolution. Note that
 * in this case no guarantee is provided as to the level of accuracy, and the
 * bounding box may have a significant margin of error.
 * @param cell Cell to calculate bbox for
 * @param out  BBox to hold output
 * @param coverChildren Whether the bounding box should cover all children
 */
H3Error cellToBBox(H3Index cell, BBox *out, bool coverChildren) {
    H3Error err;

    CellBoundary boundary;
    err = H3_EXPORT(cellToBoundary)(cell, &boundary);
    if (err) {
        return err;
    }
    // Convert to GeoLoop
    GeoLoop loop;
    loop.numVerts = boundary.numVerts;
    LatLng *verts = malloc(boundary.numVerts * sizeof(LatLng));
    if (!verts) {
        return E_MEMORY_ALLOC;
    }
    memcpy(verts, &boundary.verts, boundary.numVerts * sizeof(LatLng));
    loop.verts = verts;
    // Calculate bbox
    bboxFromGeoLoop(&loop, out);

    if (coverChildren) {
        // Buffer the bounding box to cover children
        scaleBBox(out, CHILD_SCALE_FACTOR);
    }

    // Adjust the BBox to handle poles
    H3Index poleTest;
    // North pole
    err = H3_EXPORT(latLngToCell)(&NORTH_POLE, H3_GET_RESOLUTION(cell),
                                  &poleTest);
    if (NEVER(err != E_SUCCESS)) {
        return err;
    }
    if (cell == poleTest) {
        out->north = M_PI_2;
    }
    // South pole
    err = H3_EXPORT(latLngToCell)(&SOUTH_POLE, H3_GET_RESOLUTION(cell),
                                  &poleTest);
    if (NEVER(err != E_SUCCESS)) {
        return err;
    }
    if (cell == poleTest) {
        out->south = -M_PI_2;
    }
    // If we contain a pole, expand the longitude to include the full domain,
    // effectively making the bbox a circle around the pole.
    if (out->north == M_PI_2 || out->south == -M_PI_2) {
        out->east = M_PI;
        out->west = -M_PI;
    }

    return E_SUCCESS;
}

/**
 * Get a base cell by number, or H3_NULL if out of bounds
 */
static H3Index getBaseCell(int baseCellNum) {
    if (baseCellNum < 0 || baseCellNum >= NUM_BASE_CELLS) {
        return H3_NULL;
    }
    H3Index baseCell;
    setH3Index(&baseCell, 0, baseCellNum, 0);
    return baseCell;
}

static void iterErrorPolygonCompact(IterCellsPolygonCompact *iter,
                                    H3Error error) {
    iterDestroyPolygonCompact(iter);
    iter->error = error;
}

/**
 * Given a cell, find the next cell in the sequence of all cells
 * to check in the iteration.
 */
static H3Index nextCell(H3Index cell) {
    int res = H3_GET_RESOLUTION(cell);
    while (true) {
        // If this is a base cell, set to next base cell (or H3_NULL if done)
        if (res == 0) {
            return getBaseCell(H3_GET_BASE_CELL(cell) + 1);
        }
        // If not the last sibling of parent, return next sibling
        Direction digit = H3_GET_INDEX_DIGIT(cell, res);
        if (digit < INVALID_DIGIT) {
            H3_SET_INDEX_DIGIT(
                cell, res,
                digit + (H3_EXPORT(isPentagon)(cell) && digit == CENTER_DIGIT
                             ? 2  // Skip missing pentagon child
                             : 1));
            return cell;
        }
        // Move up to the parent for the next loop iteration
        res--;
        H3Index parent;
        H3Error err = H3_EXPORT(cellToParent)(cell, res, &parent);
        if (NEVER(err != E_SUCCESS)) {
            // Should be unreachable; res-- can't be out of range, and can't
            // mismatch current
            return H3_NULL;
        }
        cell = parent;
    }
}

/**
 * Initialize a IterCellsPolygonCompact struct representing the sequence of
 * cells within the target polygon. The test for including edge cells is defined
 * by the polyfill mode passed in the `flags` argument.
 *
 * Initialization of this object may fail, in which case the `error` property
 * will be set and all iteration will return H3_NULL. It is the responsibility
 * of the caller to check the error property after initialization.
 *
 * At any point in the iteration, starting once the struct is initialized, the
 * output value can be accessed through the `cell` property.
 *
 * Note that initializing the iterator allocates memory. If an iterator is
 * exhausted or returns an error that memory is released; otherwise it must be
 * released manually with iterDestroyPolygonCompact.
 *
 * @param  polygon Polygon to fill with compact cells
 * @param  res     Finest resolution for output cells
 * @param  flags   Bit mask of option flags
 * @return         Initialized iterator, with the first value available
 */
IterCellsPolygonCompact iterInitPolygonCompact(GeoPolygon *polygon, int res,
                                               uint32_t flags) {
    IterCellsPolygonCompact iter = {
        // Initialize output properties. The first cell will be set in iterStep
        .cell = getBaseCell(0),
        .error = E_SUCCESS,
        // Save input arguments
        ._polygon = polygon,
        ._res = res,
        ._flags = flags,
        ._bboxes = NULL};

    if (res < 0 || res > MAX_H3_RES) {
        iterErrorPolygonCompact(&iter, E_RES_DOMAIN);
        return iter;
    }

    if (flags != 0) {
        iterErrorPolygonCompact(&iter, E_OPTION_INVALID);
        return iter;
    }

    // Initialize bounding boxes for polygon and any holes. Memory allocated
    // here must be released through iterDestroyPolygonCompact
    iter._bboxes = H3_MEMORY(malloc)((polygon->numHoles + 1) * sizeof(BBox));
    if (!iter._bboxes) {
        iterErrorPolygonCompact(&iter, E_MEMORY_ALLOC);
        return iter;
    }
    bboxesFromGeoPolygon(polygon, iter._bboxes);

    return iter;
}

/**
 * Increment the polyfill iterator, running the polygon to cells algorithm.
 *
 * Briefly, the algorithm checks every cell in the global grid hierarchically,
 * starting with the base cells. Cells coarser than the target resolution are
 * checked for complete child inclusion using a bounding box guaranteed to
 * contain all children.
 * - If the bounding box is contained by the polygon, output is set to the cell
 * - If the bounding box intersects, recurse into the first child
 * - Otherwise, continue with the next cell in sequence
 *
 * For cells at the target resolution, a finer-grained check is used according
 * to the inclusion criteria set in flags.
 *
 * @param  iter Iterator to increment
 * @return      Updated iterator, with the latest value in the `cell` property
 */
void iterStepPolygonCompact(IterCellsPolygonCompact *iter) {
    H3Index cell = iter->cell;
    H3Error err;

    // once cell == H3_NULL, the iterator returns an infinite sequence of
    // H3_NULL
    if (cell == H3_NULL) return;

    while (cell) {
        int cellRes = H3_GET_RESOLUTION(cell);

        // Target res: Do a fine-grained check
        if (cellRes == iter->_res) {
            // Check if the cell is in the polygon
            // TODO: Handle other polyfill modes here
            LatLng center;
            H3_EXPORT(cellToLatLng)(cell, &center);
            if (pointInsidePolygon(iter->_polygon, iter->_bboxes, &center)) {
                // Set to next output
                iter->cell = cell;
                return;
            }
        }

        // Coarser cell: Check the bounding box
        if (cellRes < iter->_res) {
            // Get a bounding box for all of the cell's children
            BBox bbox;
            err = cellToBBox(cell, &bbox, true);
            if (err) {
                iterErrorPolygonCompact(iter, err);
                return;
            }
            if (bboxIntersects(&bbox, &iter->_bboxes[0])) {
                // Convert bbox to cell boundary, CCW vertex order
                CellBoundary bboxBoundary = {
                    .numVerts = 4,
                    .verts = {{bbox.north, bbox.east},
                              {bbox.north, bbox.west},
                              {bbox.south, bbox.west},
                              {bbox.south, bbox.east}}};
                if (cellBoundaryInsidePolygon(iter->_polygon, iter->_bboxes,
                                              &bboxBoundary, &bbox)) {
                    // Bounding box is fully contained, so all children are
                    // included. Set to next output.
                    iter->cell = cell;
                    return;
                }
                // Otherwise, the intersecting bbox means we need to test all
                // children, starting with the first child
                H3Index child;
                err = H3_EXPORT(cellToCenterChild)(cell, cellRes + 1, &child);
                if (err) {
                    iterErrorPolygonCompact(iter, err);
                    return;
                }
                // Restart the loop with the child cell
                cell = child;
                continue;
            }
        }

        // Find the next cell in the sequence of all cells and continue
        cell = nextCell(cell);
    }
    // If we make it out of the loop, we're done
    iterDestroyPolygonCompact(iter);
}

/**
 * Destroy an iterator, releasing any allocated memory. Iterators destroyed in
 * this manner are safe to use but will always return H3_NULL.
 * @param  iter Iterator to destroy
 * @return      [description]
 */
void iterDestroyPolygonCompact(IterCellsPolygonCompact *iter) {
    if (iter->_bboxes) {
        H3_MEMORY(free)(iter->_bboxes);
    }
    iter->cell = H3_NULL;
    iter->error = E_SUCCESS;
    iter->_polygon = NULL;
    iter->_res = -1;
    iter->_flags = 0;
    iter->_bboxes = NULL;
}