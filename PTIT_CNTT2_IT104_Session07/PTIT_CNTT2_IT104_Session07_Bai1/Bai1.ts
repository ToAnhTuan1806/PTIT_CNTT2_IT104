class Employee{
    public name:string
    protected company:string
    private phone: number
    constructor(name:string, company:string, phone:number){
        this.name=name
        this.company=company
        this.phone=phone
    }

    printInfo():void{
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
        
    }
}

class Manager extends Employee{
    public teamSize:number
    constructor(name:string, company:string, phone:number, teamSize:number){
        super(name, company, phone)
        this.teamSize=teamSize
    }

    printInfo(): void {
        super.printInfo();
        console.log(`TeamSize: ${this.teamSize}`);
    }
}

let emp1 = new Employee("Nguyễn Văn A", "ABC Corp", 912345678);
let emp2 = new Employee("Trần Thị B", "XYZ Corp", 934567890);
let mgr1 = new Manager("Lê Văn C", "Tech Solutions", 976543210, 15);


emp1.printInfo();

emp2.printInfo();

mgr1.printInfo();