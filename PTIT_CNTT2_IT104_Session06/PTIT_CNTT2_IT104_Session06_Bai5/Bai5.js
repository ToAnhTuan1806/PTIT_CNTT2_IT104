"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 20;
        console.log(`Tăng tốc: ${this.speed} km/h`);
    }
    slowDown() {
        this.speed -= 10;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Giảm tốc: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Dừng lại: ${this.speed} km/h`);
    }
}
let myCar = new Vehicle(0);
myCar.speedUp();
myCar.slowDown();
myCar.stop();
