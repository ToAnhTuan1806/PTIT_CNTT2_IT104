"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// b2: Xd hàm calculate(a,b,callBackfnc)
const calculate = (a, b, callback) => {
    let sum = a + b;
    callback(sum);
};
// b3: viet ham callBackFnc (in ra kq)
const callBackFnc = (result) => {
    console.log("Ket qua: ", result);
};
// b4: gọi hàm
calculate(18, 6, callBackFnc);
