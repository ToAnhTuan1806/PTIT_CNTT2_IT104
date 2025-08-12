"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lớp trừu tượng (abstract class) - không thể tạo đối tượng trực tiếp
class Vehicle {
    // method thường: có nội dung sẵn
    // -> lớp con có thể dùng ngay hoặc override nếu muốn
    start() {
        console.log("Khởi động phương tiện...");
    }
}
// lớp con Car kế thừa Vehicle và bắt buộc phải viết lại move()
class Car extends Vehicle {
    move() {
        console.log("Ô tô đang di chuyển trên đường");
    }
}
// lớp con Boat kế thừa Vehicle và bắt buộc phải viết lại move()
class Boat extends Vehicle {
    move() {
        console.log("Thuyền đang di chuyển trên sông");
    }
}
let myCar = new Car();
myCar.start();
myCar.move();
let myBoat = new Boat();
myBoat.start();
myBoat.move();
