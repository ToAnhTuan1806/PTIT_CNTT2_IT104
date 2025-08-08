"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Ten: ${this.name}`);
        console.log(`Cong ty: ${this.company}`);
        console.log(`So dien thoai: ${this.phone}`);
    }
}
let em1 = new Employee("Do Moi", "TAT Corp", "0987123465");
em1.printInfo();
