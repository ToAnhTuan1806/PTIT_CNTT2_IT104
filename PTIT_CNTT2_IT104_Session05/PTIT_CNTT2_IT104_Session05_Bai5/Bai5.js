"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        if (width > 0) {
            this.width = width;
        }
        else {
            console.log("Chiều rộng phải lớn hơn 0");
        }
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        if (height > 0) {
            this.height = height;
        }
        else {
            console.log("Chiều dài phải lớn hơn 0");
        }
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
let rect = new Rectangle(5, 10);
console.log(`Chieu dai: ${rect.getWidth()}, Chieu rong: ${rect.getHeight()},\n Dien tich: ${rect.getArea()}, Chu vi: ${rect.getPerimeter()}\n`);
rect.setWidth(7);
rect.setWidth(14);
console.log(`Chieu dai: ${rect.getWidth()}, Chieu rong: ${rect.getHeight()},\n Dien tich: ${rect.getArea()}, Chu vi: ${rect.getPerimeter()}`);
