interface Student{
    name:string,
    age:number,
    email:string
};

function showInfo(student: Student):void{
    console.log(`Ten toi la: ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}`);
}

let std: Student={
    name: "To Anh Tuan",
    age: 18,
    email: "totuan@gmail.com"
}

showInfo(std);