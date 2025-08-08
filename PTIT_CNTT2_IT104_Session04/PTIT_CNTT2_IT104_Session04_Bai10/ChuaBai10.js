"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCompletedStudents(course) {
    return course.students.filter((student) => {
        return student.hasCompleted === true;
    });
}
function calculateAverageScore(course) {
    // Loc cac sinh vien co diem
    let scoreStudents = course.students.filter((student) => {
        return typeof student.finalScore === "number";
    });
    // Tinh diem tb tren toan khoa
}
