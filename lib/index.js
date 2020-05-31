"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sleep(timeout) {
    var res, timer;
    var promise = new Promise(function (resolve) {
        res = resolve;
        timer = setTimeout(function () {
            resolve('done');
        }, timeout);
    });
    var cancel = function (data) {
        res(data);
        clearTimeout(timer);
    };
    promise.cancel = cancel;
    return promise;
}
exports.default = sleep;
