class Vehicle{
    protected name:string
    protected speed:number
    protected id:number

    constructor(name:string, speed:number, id:number){
        this.name=name
        this.speed=speed
        this.id=id
    }

    slowDown(amount:number):void{
        this.speed-=amount
        if(this.speed<0){
            this.speed=0
        }
        console.log(`${this.name} giảm tốc ${amount} km/h`) 
    }

    speedUp(amount:number):void
}