"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myFilter = (arr, searchValue, callback) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (callback(value, searchValue)) {
            result.push(value);
        }
    }
    return result;
};
const callBackFnc = (value, searchValue) => value === searchValue;
let numbers = [1, 2, 2, 3, 4, 5, 6];
console.log(myFilter(numbers, 2, callBackFnc));
console.log(myFilter(numbers, 10, callBackFnc));
