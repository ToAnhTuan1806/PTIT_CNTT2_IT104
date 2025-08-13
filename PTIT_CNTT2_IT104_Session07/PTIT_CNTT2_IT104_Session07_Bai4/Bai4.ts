abstract class Person{
    public name:string
    constructor(name:string){
        this.name=name
    }
    displayInfo():void{
        console.log(`Ten sv: ${this.name}`);
        
    }
}

class Student extends Person{
    id:number
    constructor(name:string, id:number){
        super(name)
        this.id=id
    }
    displayInfo(): void {
        console.log(`Ten sv: ${this.name}, Ma sv: ${this.id}`);
        
    }
}

class Teacher extends Person{
    subject: string
    constructor(name:string, subject:string){
        super(name)
        this.subject=subject
    }
    displayInfo(): void {
        console.log(`Ten gv: ${this.name}, Mon hoc: ${this.subject}`);
        
    }
}

let student = new Student("Nguyễn Văn A", 12345);
let teacher = new Teacher("Trần Thị B", "Toán học");

student.displayInfo();
teacher.displayInfo();