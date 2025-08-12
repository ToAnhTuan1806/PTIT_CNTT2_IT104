abstract class Shape {
    name: string
    constructor(name:string){
        this.name=name
    }
    getName():string{
        return this.name
    }
    abstract getSize():void
}

class Rectangle extends Shape{
    width:number
    height: number
    constructor(name:string, width:number, height: number){
        super(name)
        this.width=width
        this.height=height
    }
    getSize(): void {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}
let rect= new Rectangle("Rectangle", 10, 5)
console.log("Name: ", rect.getName());
rect.getSize()
