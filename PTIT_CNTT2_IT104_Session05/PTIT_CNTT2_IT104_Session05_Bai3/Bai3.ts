class Employee{
    public name:string
    protected company:string
    private phone:string

    constructor(name:string, company:string, phone:string){
        this.name=name
        this.company=company
        this.phone=phone
    }
    printInfo(){
        console.log(`Ten: ${this.name}`);
        console.log(`Cong ty: ${this.company}`);
        console.log(`So dien thoai: ${this.phone}`);
    }
}


let em1=new Employee("Do Moi", "TAT Corp", "0987123465")
em1.printInfo()