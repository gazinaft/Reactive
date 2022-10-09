'use strict';

import {takeFour, readObservable, readMany} from "./utils.js";
import {
    observableArray,
    observableCallback, observableComplete,
    observableElement, observableFibonacci,
    observableInterval,
    observableMinMax, observableNever, observablePromise,
    observableRange
} from "./publishers.js";

readMany([
    'range',
    'element',
    'array',
    'callback',
    'promise',
    'empty',
    'never',
    'fibonacci'
], [
    observableRange,
    observableElement,
    observableArray,
    observableCallback,
    observablePromise,
    observableComplete,
    observableNever,
    observableFibonacci
])

readObservable('4 element interval', takeFour(observableInterval));

readObservable('minimax fulfilled', observableMinMax(1, 10)(5));
readObservable('minimax rejected', observableMinMax(1, 3)(5));

