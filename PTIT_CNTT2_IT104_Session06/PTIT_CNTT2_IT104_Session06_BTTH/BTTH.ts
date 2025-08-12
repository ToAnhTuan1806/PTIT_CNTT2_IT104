interface IAnimal{
    name:string
    age:number
    category:string

    sound():string
    getDetails():string
    move():string
    feed():string
}

abstract class Animal implements IAnimal{
    name:string
    age:number
    category: string

    constructor(name: string, age: number, category: string) {
        this.name = name;
        this.age = age;
        this.category = category;
    }

    sound(): string {
        return "Sound"
    }
    getDetails(): string {
        return`name: ${this.name}, age: ${this.age}, category: ${this.category}`

    }
    abstract move():string
    feed(): string {
        return "feed"
    }

}

// xay dung cac lop con
class Mamal extends Animal{
     furColor: string;
    constructor(name: string, age: number, category: string, furColor: string) {
        super(name, age, category);
        this.furColor = furColor;
    }
    move(): string {
        return "Chạy";
    }
}

class Bird extends Animal{
    wingSpan: number;
    constructor(name: string, age: number, category: string, wingSpan: number) {
        super(name, age, category);
        this.wingSpan = wingSpan;
    }
    move(): string {
        return "Bay";
    }
}

class Reptile extends Animal{
    venomous: boolean;

    constructor(name: string, age: number, category: string, venomous: boolean) {
        super(name, age, category);
        this.venomous = venomous;
    }

    move(): string {
        return "Bò";
    }
}

class Zookeeper{
    careForAnimal(animal:Animal):void{
        console.log(`Care for ${animal.name}`);
        
    }
}