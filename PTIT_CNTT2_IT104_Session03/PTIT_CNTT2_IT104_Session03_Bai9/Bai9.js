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
function power(base, exponent) {
    return Math.pow(base, exponent);
}
function sqrt(base, root) {
    return Math.pow(base, 1 / root);
}
function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return "so khong hop le";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function phepTinh(operator) {
    let input1 = document.getElementById("input1"); //as HTMLInputElement là cách để ép kiểu (type assertion)
    let input2 = document.getElementById("input2");
    let resultDisplay = document.getElementById("result");
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    if (isNaN(num1) || (operator !== "!" && isNaN(num2))) {
        resultDisplay.textContent = "Du lieu khong hop le";
        return;
    }
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        case "^":
            result = power(num1, num2);
            break;
        case "√":
            result = sqrt(num1, num2);
            break;
        case "!":
            result = factorial(num1);
            break;
        default:
            result = "Phep toan khong ho tro";
    }
    resultDisplay.textContent = "Kết quả: " + result;
}
