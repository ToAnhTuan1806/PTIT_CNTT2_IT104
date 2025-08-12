"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(raduis) {
        this.radius = raduis;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width * this.height);
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
