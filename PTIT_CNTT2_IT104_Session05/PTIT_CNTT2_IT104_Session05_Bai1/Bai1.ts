class Vehicle{
    name: string;
    year: number;
    company: string;

    constructor(name:string, year:number, company:string){
        this.name=name
        this.year=year
        this.company=company
    }
}

let car1 = new Vehicle("Civic", 2020, "Honda");
let car2 = new Vehicle("Model 3", 2022, "Tesla");
console.log(`Xe 1: ${car1.name}, năm ${car1.year}, hãng ${car1.company}`);
console.log(`Xe 2: ${car2.name}, năm ${car2.year}, hãng ${car2.company}`);