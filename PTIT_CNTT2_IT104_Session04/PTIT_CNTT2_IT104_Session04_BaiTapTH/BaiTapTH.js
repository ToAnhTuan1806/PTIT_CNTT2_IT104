"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
let students = [];
// B2: Xay dung cac ham theo yeu cau
// them
function addStudent(student) {
    students.push(student);
    console.log("Them sinh vien thanh cong");
}
// sua
function updateStudent(name, newName, newAge) {
    let findStudent = students.find(student => student.name === name);
    if (findStudent) {
        findStudent.name = newName;
        findStudent.age = newAge;
    }
    else {
        console.log("Khong tim thay sinh vien");
    }
}
// xoa
function deleteStudent(name) {
    let deleteIndex = students.findIndex((student) => student.name === name);
    if (deleteIndex !== -1) {
        students.splice(deleteIndex, 1);
    }
    else {
        console.log("Khong tim thay sinh vien");
    }
}
function convert(score) {
    switch (score) {
        case "A":
            return 10;
        case "B":
            return 8;
        case "C":
            return 6;
        case "D":
            return 4;
        default:
            return 0;
    }
}
// tinh diem tb
function avg(student) {
    // Tinh tong diem tat ca cac mon
    let total = student.subjects.reduce((acc, element) => {
        if (typeof element.score === "number") {
            return acc + element.score;
        }
        else {
            return acc + convert(element.score); // neu la chuoi
        }
    }, 0);
    // Tinh diem trung binh
    return total / student.subjects.length;
}
// xep loai
function rank(student) {
    let avgScore = avg(student);
    if (avgScore >= 8.5) {
        return "Giỏi";
    }
    else if (avgScore >= 6.5) {
        return "Khá";
    }
    else if (avgScore >= 5) {
        return "Trung bình";
    }
    else {
        return "Yếu";
    }
}
function showStudent() {
    console.log("===== Danh sách sinh viên =====");
    students.forEach(student => {
        let avgScore = avg(student);
        let studentRank = rank(student);
        console.log(`Tên: ${student.name}, Tuổi: ${student.age}, ĐTB: ${avgScore.toFixed(2)}, Xếp loại: ${studentRank}`);
    });
}
// B3: Goi ham, kiem tra
addStudent({
    name: "An",
    age: 20,
    subjects: [
        { SubjectName: "Toán", score: 9 },
        { SubjectName: "Lý", score: "B" },
        { SubjectName: "Hoá", score: "A" }
    ]
});
addStudent({
    name: "Bình",
    age: 21,
    subjects: [
        { SubjectName: "Toán", score: "C" },
        { SubjectName: "Lý", score: "D" },
        { SubjectName: "Hoá", score: "B" }
    ]
});
updateStudent("Bình", "Bình Nguyễn", 22);
deleteStudent("Không có tên này");
showStudent();
