"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processInput(input) {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            let num = Number(input);
            console.log(num ** 2);
        }
        else {
            let match = input.match(/[a-zA-Z]/g);
            let count = 0;
            if (match) {
                count = match.length;
            }
            else {
                count = 0;
            }
            console.log(`${count} ky tu chu cai`);
        }
    }
    else if (typeof input === "number") {
        if (input < 2) {
            console.log("Khog phai so nguyen to");
            return;
        }
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log("La so nguyen to");
        }
        else {
            console.log("Khog phai so nguyen to");
        }
    }
    else if (typeof input === "boolean") {
        if (input === true) {
            console.log("Gia tri la true - tien hanh xu ly");
        }
        else {
            console.log("Gia tri la false - dung xu ly");
        }
    }
}
processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);
processInput(false);
