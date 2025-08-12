"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loai cong viec: ${this.type}`);
    }
}
class PattimeJob extends Job {
    workingHour;
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Ful-time");
    }
    calculateSalary() {
        return 1000000;
    }
}
let parttime = new PattimeJob(50);
let fulltime = new FulltimeJob;
parttime.printType();
console.log(`Luong: ${parttime.calculateSalary()} VND`);
fulltime.printType();
console.log((`Luong: ${fulltime.calculateSalary()} VND`));
