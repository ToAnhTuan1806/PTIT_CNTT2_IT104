class Vehicle{
    public name:string
    protected year:number
    private company:string
    readonly id:string
    constructor(name:string, year:number, company:string, id:string){
        this.name=name
        this.year=year
        this.company=company
        this.id=id
    }
    
    printInfo():void{
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }

}
let car=new Vehicle("Toyota Vios", 2020, "Toyota Motor", "CX1");
car.printInfo()