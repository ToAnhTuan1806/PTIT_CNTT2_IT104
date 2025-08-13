"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed -= 5;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }
    speedUp() {
        this.speed += 5;
    }
    showSpeed() {
        console.log(`Toc do hien tai ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Ten: ${this.name}, Toc do: ${this.speed} km/h, ID: ${this.id}, So banh rang: ${this.gear}`);
    }
}
let bike = new Bicycle("Xe đạp địa hình", 15, 101, 21);
bike.showInfo();
bike.speedUp();
bike.showSpeed();
bike.slowDown();
bike.showSpeed();
