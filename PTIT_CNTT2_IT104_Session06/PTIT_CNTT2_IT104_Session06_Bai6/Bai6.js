"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class Classroom {
    students = [];
    showStudents() {
        console.log("Ds hoc sinh: ");
        if (this.students.length === 0) {
            console.log("Khong co hs nao");
        }
        else {
            this.students.forEach(std => {
                console.log(`ID: ${std.getId()}, Name: ${std.getName()}`);
            });
        }
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        let student = this.students.find(std => std.getId() === id);
        if (student) {
            console.log(`Tim thay: ID: ${student.getId()}, Name: ${student.getName()}`);
        }
        else {
            console.log(`Khong tim thay hs co ID ${id}`);
        }
    }
    addStudentInClass(id) {
        let index = allStudents.findIndex(std => std.getId() === id);
        if (index !== -1) {
            let foundStudent = allStudents[index];
            if (foundStudent) {
                this.students.push(foundStudent);
                allStudents.splice(index, 1);
                console.log(`Da them hs ID ${id} vao lop`);
            }
            else {
                console.log(`Khong tim thay hs ID ${id}`);
            }
        }
    }
}
allStudents.push(new Student(1, "An"), new Student(2, "Bình"), new Student(3, "Châu"), new Student(4, "Dũng"), new Student(5, "Hà"), new Student(6, "Khánh"));
let classA = new Classroom();
let classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log("\n=== Lớp A ===");
classA.showStudents();
console.log("\n=== Lớp B ===");
classB.showStudents();
console.log("\n=== allStudentss còn lại ===");
console.log(allStudents);
