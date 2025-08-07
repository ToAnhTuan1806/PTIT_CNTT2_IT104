"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printStaffInfo(staff) {
    console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`);
}
let staff1 = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};
printStaffInfo(staff1);
