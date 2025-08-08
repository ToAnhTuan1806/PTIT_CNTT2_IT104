"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let car1 = new Vehicle("Civic", 2020, "Honda");
let car2 = new Vehicle("Model 3", 2022, "Tesla");
console.log(`Xe 1: ${car1.name}, năm ${car1.year}, hãng ${car1.company}`);
console.log(`Xe 2: ${car2.name}, năm ${car2.year}, hãng ${car2.company}`);
