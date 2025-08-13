"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo moe");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
let myCat = new Cat("Mèo Mun");
let myDog = new Dog("Shiba");
myCat.printName();
myCat.makeNoise();
myDog.printName();
myDog.makeNoise();
