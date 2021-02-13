/*
 * Copyright 2021 Uber Technologies, Inc.
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
/** @file childIter.h
 * @brief An iterator struct/functions for the children of a cell
 */

#ifndef CHILDITER_H
#define CHILDITER_H

#include <stdint.h>

#include "h3Index.h"
#include "h3api.h"

typedef struct {
    H3Index h;
    int pr;   // parent resolution
    int cr;   // child resolution; note that we could drop this from the struct,
              // but we'd have to extract it from h at each iteration.
    int fnz;  // first nonzero digit (this digit skips `1` for pentagons)
} ChildIter;
// new name: Iter_Child

DECLSPEC ChildIter ci_init(H3Index h, int childRes);
DECLSPEC ChildIter base_children_init(const int baseCellNum,
                                      const int childRes);
DECLSPEC void ci_step(
    ChildIter* CI);  // instead of modifying a struct, we could also simply
                     // create a new struct like `ci2 = ci_step(ci1)`; not sure
                     // which interface makes more sense

typedef struct {
    H3Index h;
    int baseCellNum;
    ChildIter CI;
} CellsAtResIter;
// new name: Iter_Res

DECLSPEC CellsAtResIter cari_init(int res);
DECLSPEC void cari_step(CellsAtResIter* CarI);


typedef struct {
    H3Index e;
    int baseCellNum;
    ChildIter CI;
} Iter_DiEdge;
// new name: Iter_Res

// uncompact iter?

DECLSPEC CellsAtResIter cari_init(int res);
DECLSPEC void cari_step(CellsAtResIter* CarI);

#endif
