"use strict";

import {Observable, of, from, range, interval, iif, throwError, never, NEVER, EMPTY, generate} from 'rxjs';

// range
const observableRange = range(1, 10);

// 1 element
const observableElement = of(1);

// array
const observableArray = from([10, 20, 30]);

// stream
const observablePromise = from(Promise.resolve('Promised Value'));

// callback
const callback = (subscriber) => {
    subscriber.next(1);
}
const observableCallback = new Observable(callback);

// interval
const observableInterval = interval(100);

// min-max
const observableMinMax = (min, max) => value => iif(
    () => value > min && value < max, of(value), throwError(() => new Error));

// complete and never
const observableComplete = EMPTY;
const observableNever = NEVER;

// fibonacci sequence
const fibonacci = x => x <= 1 ? 1: fibonacci(x - 1) + fibonacci(x - 2);
const observableFibonacci = generate({
    initialState: 0,
    condition: x => x < 20,
    resultSelector: x => fibonacci(x),
    iterate: x => x + 1
})

export {
    observableRange,
    observableElement,
    observableArray,
    observableCallback,
    observableInterval,
    observablePromise,
    observableMinMax,
    observableComplete,
    observableNever,
    observableFibonacci
}