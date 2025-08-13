class Vehicle{
    protected name:string
    protected speed:number
    protected id:number

    constructor(name:string, speed:number, id:number){
        this.name=name
        this.speed=speed
        this.id=id
    }

    slowDown():void{
        this.speed-= 5
        if(this.speed<0){
            this.speed=0
        }
    }

    speedUp():void{
        this.speed+= 5
    }

    showSpeed():void{
        console.log(`Toc do hien tai ${this.speed} km/h`);
        
    }
}

class Bicycle extends Vehicle{
    private gear:number
    constructor(name:string, speed:number, id:number ,gear:number){
        super(name, speed, id)
        this.gear=gear
    }

    showInfo():void{
        console.log(`Ten: ${this.name}, Toc do: ${this.speed} km/h, ID: ${this.id}, So banh rang: ${this.gear}`);
        
    }
}

let bike = new Bicycle("Xe đạp địa hình", 15, 101, 21);
bike.showInfo();
bike.speedUp();
bike.showSpeed();
bike.slowDown();
bike.showSpeed();