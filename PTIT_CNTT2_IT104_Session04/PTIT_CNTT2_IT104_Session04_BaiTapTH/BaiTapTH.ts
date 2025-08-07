// B1: Tao ra cac kieu du lieu can thiet 
interface Subject{
    SubjectName: string,
    score: number|string
};
interface Student{
    name:string,
    age:number,
    subjects: Subject[]
};
let students: Student[]= [];

// B2: Xay dung cac ham theo yeu cau
// them
function addStudent(student: Student): void{
    students.push(student);
    console.log("Them sinh vien thanh cong");
}
// sua
function updateStudent(name: string, newName: string, newAge: number): void{
    let findStudent= students.find(student => student.name===name)
    if(findStudent){
        findStudent.name=newName
        findStudent.age=newAge
    }else{
        console.log("Khong tim thay sinh vien");
    }
}
// xoa
function deleteStudent(name:string):void{
    let deleteIndex = students.findIndex((student)=>student.name===name)
    if(deleteIndex!==-1){
        students.splice(deleteIndex, 1)
    }else{
        console.log("Khong tim thay sinh vien");
        
    }
}

function convert(score:string): number{
    switch(score){
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
function avg(student:Student):number{
    // Tinh tong diem tat ca cac mon
    let total=student.subjects.reduce((acc, element) => {
        if(typeof element.score=== "number"){
            return acc + element.score
        }else {
            return acc + convert(element.score) // neu la chuoi
        }
    }, 0)
    // Tinh diem trung binh
    return total/student.subjects.length
}

// xep loai
function rank(student: Student):string{
    let avgScore= avg(student);
    if(avgScore>=8.5){
        return "Giỏi"
    }else if(avgScore>=6.5){
        return "Khá"
    }else if(avgScore>=5){
        return "Trung bình"
    }else {
        return "Yếu"
    }
}

function showStudent(student:Student):void{
    console.log("Danh sach sinh vien");
    students.forEach(student=> {
        let avgScore=avg(student)
        let studentRank= rank(student)
        console.log(`Ten: ${student.name}, Tuoi: ${student.age}, DTB: ${avgScore}, Xep loai: ${rank}`

        );
        
    })
}
// B3: Goi ham, kiem tra
