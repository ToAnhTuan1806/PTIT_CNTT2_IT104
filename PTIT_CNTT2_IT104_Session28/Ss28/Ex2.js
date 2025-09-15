"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delayedCallback = (callback, delay) => {
    setTimeout(callback, delay);
};
const callBackFnc = () => {
    console.log("Da goi callback sau tg delay");
};
delayedCallback(callBackFnc, 3000);
