 class Student{
    private id:number
    private name:string
    constructor(id:number, name:string){
        this.id=id
        this.name=name
    }
    getId(): number{
        return this.id
    }
    getName(): string{
        return this.name
    }
 }

 let allStudents: Student[]=[]

 class Classroom{
    students: Student[]=[]

    showStudents():void{
        console.log("Ds hoc sinh: ");
        if(this.students.length===0){
            console.log("Khong co hs nao");
        } else{
            this.students.forEach(std => {
                console.log(`ID: ${std.getId()}, Name: ${std.getName()}`)
            })
        }
        
    }

    addStudent(student: Student):void{
        this.students.push(student)
    }
    filterStudent(id:number):void{
        let student = this.students.find(std => std.getId() === id);
        if (student) {
            console.log(`Tim thay: ID: ${student.getId()}, Name: ${student.getName()}`);
        } else {
            console.log(`Khong tim thay hs co ID ${id}`);
        }
    }
    addStudentInClass(id:number):void{
        let index=allStudents.findIndex(std => std.getId()===id)
        if(index!==-1){
            let foundStudent=allStudents[index]
            if(foundStudent){
                this.students.push(foundStudent)
                allStudents.splice(index,1)
                console.log(`Da them hs ID ${id} vao lop`);
                
            }else{
                console.log(`Khong tim thay hs ID ${id}`);
                
            }
        }
    }
 }

 allStudents.push(
    new Student(1, "An"),
    new Student(2, "Bình"),
    new Student(3, "Châu"),
    new Student(4, "Dũng"),
    new Student(5, "Hà"),
    new Student(6, "Khánh")
);

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
