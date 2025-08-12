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
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`TeamSize: ${this.teamSize}`);
    }
}
let emp1 = new Employee("Nguyễn Văn A", "ABC Corp", 912345678);
let emp2 = new Employee("Trần Thị B", "XYZ Corp", 934567890);
let mgr1 = new Manager("Lê Văn C", "Tech Solutions", 976543210, 15);
emp1.printInfo();
emp2.printInfo();
mgr1.printInfo();
