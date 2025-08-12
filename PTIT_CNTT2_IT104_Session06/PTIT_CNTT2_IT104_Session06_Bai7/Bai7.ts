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
    setName(newName:string){
        this.name=newName
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
                console.log(`Da them hs ID ${id}`);
                
            }else{
                console.log(`Khong tim thay hs ID ${id}`);
                
            }
        }
    }

    removeStudent(id:number):void{
        let index = this.students.findIndex(std => std.getId()===id)
        if(index !==-1){
            let rmStudent= this.students.splice(index, 1)[0]
            if (rmStudent) {
                allStudents.push(rmStudent)
            }
            console.log(`\nDa xoa hs ID ${id}`);
            
        }else{
            console.log(`Khong tim thay hs ID ${id}`);
            
        }
    }

    editStudent(id:number, newName:string):void{
        let student= this.students.find(std => std.getId()=== id)
        if(student){
            student.setName(newName)
            console.log(`Da doi ten hs ID ${id} thanh "${newName}"`);
        }else{
            console.log(`Khong tim thay hs ID ${id}`);
            
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

classA.removeStudent(2);
classA.editStudent(3, "Châu Nguyễn");

console.log("\nLớp A sau thay đổi")
classA.showStudents();