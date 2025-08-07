"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    let numA = Number(a);
    let numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "Khong hop le";
    }
    return numA + numB;
}
function subtract(a, b) {
    let numA = Number(a);
    let numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "Khong hop le";
    }
    return numA - numB;
}
function multiply(a, b) {
    let numA = Number(a);
    let numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "Khong hop le";
    }
    return numA * numB;
}
function divide(a, b) {
    let numA = Number(a);
    let numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "Khong hop le";
    }
    if (numB === 0) {
        return "khong the chia cho 0";
    }
    return numA / numB;
}
console.log(add(6, "12"));
console.log(subtract("30", 6));
console.log(multiply("6", "4"));
console.log(divide("6", 6));
