"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkCondition = (condition, callback) => {
    setTimeout(() => {
        callback(condition);
    }, 1000);
};
const callBackFnc = (result) => {
    console.log("Dieu kien tra ve:", result);
};
checkCondition(true, callBackFnc);
checkCondition(false, callBackFnc);
