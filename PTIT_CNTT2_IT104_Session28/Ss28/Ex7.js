"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
};
const callBackFnc = (value, index, arr) => {
    console.log(`Vị trí: ${index} | Phần tử: ${value} | Mảng:`, arr);
};
let numbers = [1, 2, 3, 4, 5, 6];
myForEach(numbers, callBackFnc);
