interface changeSpeed{
    speedUp():void
    slowDown():void
    stop():void
}

class Vehicle implements changeSpeed{
    private speed:number
    constructor(speed:number){
        this.speed=speed
    }

    speedUp():void {
        this.speed += 20;
        console.log(`Tăng tốc: ${this.speed} km/h`);
    }

    slowDown():void {
        this.speed -= 10
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Giảm tốc: ${this.speed} km/h`);
    }

    stop():void {
        this.speed = 0;
        console.log(`Dừng lại: ${this.speed} km/h`);
    }
}

let myCar = new Vehicle(0);

myCar.speedUp()
myCar.slowDown()
myCar.stop()
