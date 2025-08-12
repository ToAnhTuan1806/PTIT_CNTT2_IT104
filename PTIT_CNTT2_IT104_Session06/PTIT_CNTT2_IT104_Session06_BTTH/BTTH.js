"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    age;
    category;
    constructor(name, age, category) {
        this.name = name;
        this.age = age;
        this.category = category;
    }
    sound() {
        return "Sound";
    }
    getDetails() {
        return `name: ${this.name}, age: ${this.age}, category: ${this.category}`;
    }
    feed() {
        return "feed";
    }
}
// xay dung cac lop con
class Mamal extends Animal {
    furColor;
    constructor(name, age, category, furColor) {
        super(name, age, category);
        this.furColor = furColor;
    }
    move() {
        return "Chạy";
    }
}
class Bird extends Animal {
    wingSpan;
    constructor(name, age, category, wingSpan) {
        super(name, age, category);
        this.wingSpan = wingSpan;
    }
    move() {
        return "Bay";
    }
}
class Reptile extends Animal {
    venomous;
    constructor(name, age, category, venomous) {
        super(name, age, category);
        this.venomous = venomous;
    }
    move() {
        return "Bò";
    }
}
class Zookeeper {
    careForAnimal(animal) {
        console.log(`Care for ${animal.name}`);
    }
}
