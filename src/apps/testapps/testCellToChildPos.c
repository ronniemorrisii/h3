/*
 * Copyright 2017-2021 Uber Technologies, Inc.
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
/** @file
 * @brief tests H3 functions `cellToChildPos` and `childPosToCell`
 *
 *  usage: `testCellToChildPos`
 */

#include <stdlib.h>

#include "h3Index.h"
#include "h3api.h"
#include "test.h"
#include "utility.h"

static void childPos_assertions(H3Index h3) {
    int parentRes = H3_GET_RESOLUTION(h3);

    for (int resolutionOffset = 0; resolutionOffset < 4; resolutionOffset++) {
        int childRes = parentRes + resolutionOffset;
        int64_t numChildren;
        t_assertSuccess(
            H3_EXPORT(cellToChildrenSize)(h3, childRes, &numChildren));

        H3Index *children = calloc(numChildren, sizeof(H3Index));
        t_assertSuccess(H3_EXPORT(cellToChildren)(h3, childRes, children));

        int64_t childPos;
        H3Index cell;
        for (int64_t i = 0; i < numChildren; i++) {
            // Test cellToChildPos
            t_assertSuccess(
                H3_EXPORT(cellToChildPos)(children[i], parentRes, &childPos));
            t_assert(childPos == i, "childPos matches iteration index");
            // Test childPosToCell
            t_assertSuccess(
                H3_EXPORT(childPosToCell)(childPos, h3, childRes, &cell));
            t_assert(cell == children[i], "cell matches expected");
        }
    }
}

SUITE(cellToChildPos) {
    TEST(childPos_correctness) {
        iterateAllIndexesAtRes(0, childPos_assertions);
        iterateAllIndexesAtRes(1, childPos_assertions);
        iterateAllIndexesAtRes(2, childPos_assertions);
    }

    TEST(cellToChildPos_res_errors) {
        int64_t childPos;
        // random res 8 cell
        H3Index child = 0x88283080ddfffff;
        t_assert(
            H3_EXPORT(cellToChildPos)(child, -1, &childPos) == E_RES_DOMAIN,
            "error matches expected for invalid res");
        t_assert(
            H3_EXPORT(cellToChildPos)(child, 42, &childPos) == E_RES_DOMAIN,
            "error matches expected for invalid res");
        t_assert(
            H3_EXPORT(cellToChildPos)(child, 9, &childPos) == E_RES_MISMATCH,
            "error matches expected for parent res finer than child");
    }

    TEST(childPosToCell_res_errors) {
        H3Index cell;
        // random res 8 cell
        H3Index parent = 0x88283080ddfffff;
        int64_t childPos = 27;
        t_assert(H3_EXPORT(childPosToCell)(childPos, parent, 42, &cell) ==
                     E_RES_DOMAIN,
                 "error matches expected for invalid res");
        t_assert(H3_EXPORT(childPosToCell)(childPos, parent, -1, &cell) ==
                     E_RES_DOMAIN,
                 "error matches expected for invalid res");
        t_assert(H3_EXPORT(childPosToCell)(childPos, parent, 7, &cell) ==
                     E_RES_MISMATCH,
                 "error matches expected for child res coarser than parent");
    }
}
