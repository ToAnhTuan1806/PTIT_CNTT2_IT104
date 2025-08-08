"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    age;
    species;
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak() {
        console.log(`${this.name} phát ra âm thanh`);
    }
    getName() {
        return this.name;
    }
    setName(n) {
        this.name = n;
    }
    getAge() {
        return this.age;
    }
    setAge(a) {
        this.age = a;
    }
}
class Dog extends Animal {
    bread;
    constructor(name, age, species, bread) {
        super(name, age, species);
        this.bread = bread;
    }
    speak() {
        console.log("Woof!");
    }
}
class Cat extends Animal {
    bread;
    constructor(name, age, species, bread) {
        super(name, age, species);
        this.bread = bread;
    }
    speak() {
        console.log("Meow Meow!");
    }
}
class Rabit extends Animal {
    bread;
    constructor(name, age, species, bread) {
        super(name, age, species);
        this.bread = bread;
    }
    speak() {
        console.log("Squeak!");
    }
}
let randomAnimal = new Animal("animal", 10, "Mamal");
console.log(randomAnimal.getName());
console.log(randomAnimal.getAge());
console.log(randomAnimal.species);
randomAnimal.speak();
let dog = new Dog("Moi", 3, "Mamal", "Husky");
console.log(dog.getName());
console.log(dog.getAge());
console.log(dog.species);
console.log(dog.bread);
dog.speak();
