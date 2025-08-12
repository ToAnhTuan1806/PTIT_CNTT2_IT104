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
    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`${this.name} giảm tốc ${amount} km/h`);
    }
}
