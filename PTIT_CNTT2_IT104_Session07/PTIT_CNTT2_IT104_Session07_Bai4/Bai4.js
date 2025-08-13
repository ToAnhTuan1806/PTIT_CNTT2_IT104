"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Ten sv: ${this.name}`);
    }
}
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Ten sv: ${this.name}, Ma sv: ${this.id}`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Ten gv: ${this.name}, Mon hoc: ${this.subject}`);
    }
}
let student = new Student("Nguyễn Văn A", 12345);
let teacher = new Teacher("Trần Thị B", "Toán học");
student.displayInfo();
teacher.displayInfo();
