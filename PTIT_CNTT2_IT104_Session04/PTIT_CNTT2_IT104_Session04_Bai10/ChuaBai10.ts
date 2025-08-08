interface Student{
    readonly sutdentId:string
    name: string;
    email: string;
    hasCompleted: boolean;
    finalScore?: number;
}

interface Course {
  courseId: string;
  title: string;
  instructor: string;
  students: Student[];
  isActive: boolean;
}

interface CourseManager {
  schoolName: string;
  year: number;
  courses: Course[];
}

function getCompletedStudents(course: Course): Student[]{
    return course.students.filter((student) =>{
        return student.hasCompleted===true
    })
}

function calculateAverageScore(course: Course): number | null{
    // Loc cac sinh vien co diem
    let scoreStudents=course.students.filter((student) =>{
        return typeof student.finalScore==="number"
    })
    // Tinh diem tb tren toan khoa
    if(scoreStudents.length===0){
        return null
    }
    let sum= scoreStudents.reduce((total, student)=>{
        if(student.finalScore){
            return total+student.finalScore
        }
        return total
    }, 0)
    let avg= sum/course.students.length
    // Tra ve ket qua
    return avg;
}

function printCourseReport(manager: CourseManager): void{
     manager.courses.forEach((course, index) => {
        console.log(`${index + 1}.Khóa: ${course.title} (GV: ${course.instructor})`);
        console.log(`   - Tổng học viên: ${course.students.length}`);
        console.log(`   - Hoàn thành: ${getCompletedStudents(course).length} học viên`);

        let avgScore = calculateAverageScore(course);
        console.log(`   - Trung bình điểm: ${avgScore !== null ? avgScore.toFixed(1) : "N/A"}`);

        console.log(`   - Trạng thái: ${course.isActive ? "ĐANG MỞ" : "ĐÃ ĐÓNG"}`);
        console.log();
    });
}

let manager: CourseManager = {
    schoolName: "Trung tâm CNTT",
    year: 2025,
    courses: [
        {
            courseId: "TS101",
            title: "TypeScript Cơ Bản",
            instructor: "Nguyễn Văn A",
            isActive: true,
            students: [
                { sutdentId: "S01", name: "An", email: "an@example.com", hasCompleted: true, finalScore: 9 },
                { sutdentId: "S02", name: "Bình", email: "binh@example.com", hasCompleted: true, finalScore: 8 },
                { sutdentId: "S03", name: "Chi", email: "chi@example.com", hasCompleted: false }
            ]
        },
        {
            courseId: "HC101",
            title: "HTML & CSS",
            instructor: "Trần Thị B",
            isActive: false,
            students: [
                { sutdentId: "S04", name: "Dũng", email: "dung@example.com", hasCompleted: false },
                { sutdentId: "S05", name: "Hoa", email: "hoa@example.com", hasCompleted: false }
            ]
        }
    ]
};

printCourseReport(manager)