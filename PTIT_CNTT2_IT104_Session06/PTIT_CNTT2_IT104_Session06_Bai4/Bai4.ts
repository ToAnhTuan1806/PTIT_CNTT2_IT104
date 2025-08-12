interface Geometry{
    calculateArea():number
    calculatePerimeter():number

}

class Circle implements Geometry{
    private radius:number
    constructor(raduis:number){
        this.radius=raduis
    }

    calculateArea(): number {
        return Math.PI*this.radius*this.radius
    }
    calculatePerimeter(): number {
        return 2*Math.PI*this.radius
    }
}

class Rectangle implements Geometry{
    private width:number
    private height:number
    constructor(width:number, height:number){
        this.width=width
        this.height=height
    }
        calculateArea(): number {
        return this.width*this.height
    }
    calculatePerimeter(): number {
        return 2*(this.width*this.height)
    }
}

let circle = new Circle(5);
console.log("=== Circle ===");
console.log("Area:", circle.calculateArea().toFixed(2));
console.log("Perimeter:", circle.calculatePerimeter().toFixed(2));

let rectangle = new Rectangle(4, 6);
console.log("\n=== Rectangle ===");
console.log("Area:", rectangle.calculateArea());
console.log("Perimeter:", rectangle.calculatePerimeter());