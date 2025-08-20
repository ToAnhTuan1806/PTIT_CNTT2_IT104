"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createObject(keys, values) {
    const result = {};
    keys.forEach((key, index) => {
        result[key] = values[index];
    });
    return result;
}
const keys = ["name", "age", "email"];
const values = ["Alice", 25, "alice@example.com"];
const obj = createObject(keys, values);
console.log(obj);
