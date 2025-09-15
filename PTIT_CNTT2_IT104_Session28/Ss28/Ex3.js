"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processArray = (arr, callback) => {
    arr.forEach((value, index) => {
        setTimeout(() => {
            callback(value);
        }, index * 1000);
    });
};
const callBackFnc = (value) => {
    console.log("Phan tu: ", value);
};
processArray([10, 20, 30, 40, 50], callBackFnc);
