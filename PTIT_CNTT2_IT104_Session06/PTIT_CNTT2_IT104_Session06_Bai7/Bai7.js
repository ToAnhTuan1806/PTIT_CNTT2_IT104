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
    setName(newName) {
        this.name = newName;
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
                console.log(`Da them hs ID ${id}`);
            }
            else {
                console.log(`Khong tim thay hs ID ${id}`);
            }
        }
    }
    removeStudent(id) {
        let index = this.students.findIndex(std => std.getId() === id);
        if (index !== -1) {
            let rmStudent = this.students.splice(index, 1)[0];
            if (rmStudent) {
                allStudents.push(rmStudent);
            }
            console.log(`\nDa xoa hs ID ${id}`);
        }
        else {
            console.log(`Khong tim thay hs ID ${id}`);
        }
    }
    editStudent(id, newName) {
        let student = this.students.find(std => std.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Da doi ten hs ID ${id} thanh "${newName}"`);
        }
        else {
            console.log(`Khong tim thay hs ID ${id}`);
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
console.log("\n Lớp A ");
classA.showStudents();
console.log("\n Lớp B ");
classB.showStudents();
classA.removeStudent(2);
classA.editStudent(3, "Châu Nguyễn");
console.log("\nLớp A sau thay đổi");
classA.showStudents();
