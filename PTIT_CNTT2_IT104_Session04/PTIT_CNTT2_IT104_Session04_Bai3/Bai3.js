"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
function showInfo(student) {
    console.log(`Ten toi la: ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}`);
}
let std = {
    name: "To Anh Tuan",
    age: 18,
    email: "totuan@gmail.com"
};
showInfo(std);
