class Rectangle{
    private width:number
    private height:number

    constructor(width:number, height:number){
        this.width=width
        this.height=height
    }

    getWidth(): number {
        return this.width;
    }
    setWidth(width: number): void {
        if (width>0) {
            this.width = width;
        } else {
            console.log("Chiều rộng phải lớn hơn 0");
        }
    }
    getHeight(): number {
        return this.height;
    }
    setHeight(height: number): void {
        if (height>0) {
            this.height = height;
        } else {
            console.log("Chiều dài phải lớn hơn 0");
        }
    }

    getArea():number{
        return this.width*this.height
    }
    getPerimeter():number {
        return 2*(this.width+this.height)
    }
}

let rect= new Rectangle(5,10)
console.log(`Chieu dai: ${rect.getWidth()}, Chieu rong: ${rect.getHeight()},\n Dien tich: ${rect.getArea()}, Chu vi: ${rect.getPerimeter()}\n`);

rect.setWidth(7)
rect.setWidth(14)
console.log(`Chieu dai: ${rect.getWidth()}, Chieu rong: ${rect.getHeight()},\n Dien tich: ${rect.getArea()}, Chu vi: ${rect.getPerimeter()}`);