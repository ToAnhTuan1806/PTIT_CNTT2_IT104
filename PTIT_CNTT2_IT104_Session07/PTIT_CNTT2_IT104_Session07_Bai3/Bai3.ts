abstract class Animal{
    public name:string
    constructor(name:string){
        this.name=name
    }

    abstract makeNoise():void

    printName():void{
        console.log(`Tên: ${this.name}`);
        
    }
}

class Cat extends Animal{
    makeNoise(): void {
        console.log("meo moe");
        
    }
}
class Dog extends Animal{
    makeNoise(): void {
        console.log("gâu gâu");
        
    }
}

let myCat = new Cat("Mèo Mun");
let myDog = new Dog("Shiba");

myCat.printName();
myCat.makeNoise();

myDog.printName();
myDog.makeNoise();