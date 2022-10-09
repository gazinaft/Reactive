'use strict';

import {take} from "rxjs";

const readObservable = (obsMsg, observable) => {
    console.log('started listening ' + obsMsg);
    observable.subscribe({
        next: function (x) {
            console.log('got value ' + x);
        },
        error: function (err) {
            console.error(err);
        },
        complete: function () {
            console.log(obsMsg + ' completed');
        }
    });
}

const readMany = (labels, observables) => {
    for (const index in labels) {
        readObservable(labels[index], observables[index]);
    }
}

const takeFour = observable => observable.pipe(take(4));

export {
  readObservable,
  takeFour,
  readMany
};