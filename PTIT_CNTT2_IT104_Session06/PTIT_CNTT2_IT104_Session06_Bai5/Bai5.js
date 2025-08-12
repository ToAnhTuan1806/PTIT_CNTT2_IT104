"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tăng tốc: +${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Giảm tốc: -${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Phương tiện đã dừng. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
let myCar = new Vehicle(0);
myCar.speedUp(50);
myCar.slowDown(20);
myCar.stop();
