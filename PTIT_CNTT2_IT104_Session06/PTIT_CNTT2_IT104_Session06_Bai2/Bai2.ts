abstract class Job{
    type:string
    constructor(type:string){
        this.type=type
    }
    printType():void{
        console.log(`Loai cong viec: ${this.type}`);
        
    }
    abstract calculateSalary(): number
}

class PattimeJob extends Job{
    private workingHour:number
    constructor(workingHour:number){
        super("Part-time")
        this.workingHour=workingHour
    }
    calculateSalary(): number {
        return 30000*this.workingHour
    }
}

class FulltimeJob extends Job{
    constructor(){
        super("Ful-time")
    
    }
    calculateSalary(): number {
        return 1000000
    }
}

let parttime= new PattimeJob(50)
let fulltime= new FulltimeJob
parttime.printType()
console.log(`Luong: ${parttime.calculateSalary()} VND`);
fulltime.printType()
console.log((`Luong: ${fulltime.calculateSalary()} VND`));

