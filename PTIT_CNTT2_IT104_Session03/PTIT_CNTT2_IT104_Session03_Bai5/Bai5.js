"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firtsName = "john";
let lastName = "doe";
function capitalize(name) {
    if (name.length === 0) {
        return "";
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
}
firtsName = capitalize(firtsName);
lastName = capitalize(lastName);
let fullName = firtsName + " " + lastName;
console.log(fullName);
