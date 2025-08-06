"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let removeDupString = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
};
console.log(removeDupString("banana"));
//# sourceMappingURL=Bai7.js.map