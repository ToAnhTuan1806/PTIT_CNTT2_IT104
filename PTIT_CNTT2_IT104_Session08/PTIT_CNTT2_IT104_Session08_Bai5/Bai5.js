"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findOdd(arr) {
    return arr.find(item => item % 2 === 0);
}
console.log(findOdd([1, 2, 3, 4, 5, 6, 7]));
