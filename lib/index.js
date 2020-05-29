"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sleep(timeout) {
    var res;
    var promise = new Promise(function (resolve) {
        res = resolve;
        setTimeout(function () {
            resolve('done');
        }, timeout);
    });
    promise.cancel = res;
    return promise;
}
exports.default = sleep;
