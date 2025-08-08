class Student{
    id: number
    age: number
    email: string

    constructor(id:number, age:number, email:string){
        this.id=id
        this.age=age
        this.email=email
    }
}

let students: Student[]= []
students.push(new Student(1, 18, "abc@gmail.com"));

for(let i=0; i<students.length; i++){
    let student=students[i]
       if (student) { 
        console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
    }
    
}