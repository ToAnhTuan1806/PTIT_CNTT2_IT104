"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const displayNumbers = (callback, delay) => {
    let current = 1;
    setInterval(() => {
        callback(current);
        current++;
    }, delay);
};
const callBackFnc = (value) => {
    console.log("Gia tri thu: ", value);
};
displayNumbers(callBackFnc, 1000);
