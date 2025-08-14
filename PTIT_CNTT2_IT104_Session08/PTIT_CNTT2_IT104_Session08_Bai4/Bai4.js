"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
let product = { id: 101, name: "Laptop" };
let stock = { quantity: 50, location: "Hà Nội" };
let merged2 = mergeObjects(product, stock);
console.log(merged2);
