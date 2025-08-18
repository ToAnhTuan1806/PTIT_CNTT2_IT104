"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(arr) {
    return [arr];
}
console.log(wrapInArray(5));
console.log(wrapInArray("hello"));
console.log(wrapInArray({ a: 1 }));
