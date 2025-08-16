class Customer{
    static idCounter = 1
    id: number
    name: string
    email: string
    shippingAddress: string
    constructor( name:string, email:string, shippingAddress:string){
        this.id=Customer.idCounter++
        this.name=name
        this.email=email
        this.shippingAddress=shippingAddress
    }

    getDetails():string{
        return (`Khach Hang: Ma KH: ${this.id}, Ten KH: ${this.name}, Email: ${this.email}, Dia chi gh: ${this.shippingAddress}`);
        
    }
}

abstract class Product{
    static idCounter = 1
    id: number
    name:string
    price: number
    stock:number
    constructor(name:string, price: number, stock:number){
        this.id=Product.idCounter++
        this.name=name
        this.price=price
        this.stock=stock
    }

    sell(quantity: number):void{
        if(quantity>this.stock){
            console.log("Khong du hang ton kho!");
            return
        }
        this.stock-=quantity
    }

    restock(quantity:number):void{
        this.stock+=quantity
    }

    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number
    abstract getCategory(): string
}

class ElectronicsProduct extends Product{
    warrantyPeriod:number
    constructor(name:string, price: number, stock:number, warrantyPeriod:number){
        super(name, price, stock)
        this.warrantyPeriod=warrantyPeriod
    }

    getProductInfo(): string {
        return `Electronics - Ma SP: ${this.id}, Ten SP: ${this.name}, Gia: ${this.price}, Ton kho: ${this.stock}, Bao hanh: ${this.warrantyPeriod}`
    }

    getShippingCost(distance: number): number {
        return 50000
    }

    getCategory(): string {
        return "Electronics"
    }
}

class ClothingProduct extends Product{
    size:string
    color:string
    constructor(name:string, price: number, stock:number, size:string, color:string){
        super( name, price, stock)
        this.size=size
        this.color=color
    }

    getProductInfo(): string {
        return `Clothing - Ma SP: ${this.id}, Ten SP: ${this.name}, Gia: ${this.price}, Ton kho: ${this.stock}, Kich thuoc: ${this.size}, Mau sac: ${this.color}`
    }

    getShippingCost(distance: number): number {
        return 25000
    }

    getCategory(): string {
        return "Clothing"
    }
}

class Order{
    static orderCounter = 1;
    orderId: number
    customer: Customer
    products: { product: Product, quantity: number }[]
    totalAmount:number
    constructor(customer: Customer, products: { product: Product, quantity: number }[]){
        this.orderId=Order.orderCounter++
        this.customer=customer
        this.products=products
        this.totalAmount= products.reduce((sum, item) => sum+item.product.price * item.quantity, 0)
    }

    getDetails():string{
         const productList = this.products.map(item => `${item.product.name} x${item.quantity}`).join(', ');
        return `Order ID: ${this.orderId}, Khach hanh: ${this.customer.name}, San pham: [${productList}], Tong: ${this.totalAmount}`;
    }
}

class Store{
    products: Product[]=[]
    customers: Customer[]=[]
    orders: Order[]=[];

    addProduct(product: Product):void{
        this.products.push(product)
        console.log(`Da them san pham: ${product.name}`);
    }

    addCustomer(name: string, email:string, address:string):void{
        let customer= new Customer(name, email, address)
        this.customers.push(customer)
        console.log(`Da them khach hang: ${name}`);
        
    }

    // createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null {
    //     let customer
    // }
}

function startMenu(){
    let store= new Store()
    let choice:string

    do {
         choice = prompt(
            "===== MENU QUẢN LÝ CỬA HÀNG =====\n" +
            "1. Thêm khách hàng mới\n" +
            "2. Thêm sản phẩm mới\n" +
            "0. Thoát\n" +
            "===============================\n" +
            "Nhập lựa chọn: "
        ) || "0"

        switch (choice) {
            case "1":
                // === Thêm khách hàng mới ===
                const name = prompt("Nhập tên khách hàng:");
                const email = prompt("Nhập email:");
                const address = prompt("Nhập địa chỉ giao hàng:");
                if (name && email && address) {
                    store.addCustomer(name, email, address);
                    alert("✅ Đã thêm khách hàng thành công!");
                } else {
                    alert("❌ Thêm khách hàng thất bại (thiếu thông tin)!");
                }
                break;

            case "2":
                // === Thêm sản phẩm mới ===
                const type = prompt("Nhập loại sản phẩm (1: Đồ điện tử, 2: Quần áo):");
                const pName = prompt("Nhập tên sản phẩm:");
                const price = Number(prompt("Nhập giá sản phẩm:") || "0");
                const stock = Number(prompt("Nhập số lượng tồn kho:") || "0");

                if (type === "1") {
                    const warranty = Number(prompt("Nhập thời gian bảo hành (tháng):") || "0");
                    store.addProduct(new ElectronicsProduct(pName!, price, stock, warranty));
                    alert("✅ Đã thêm sản phẩm điện tử!");
                } else if (type === "2") {
                    const size = prompt("Nhập kích thước:");
                    const color = prompt("Nhập màu sắc:");
                    store.addProduct(new ClothingProduct(pName!, price, stock, size!, color!));
                    alert("✅ Đã thêm sản phẩm quần áo!");
                } else {
                    alert("❌ Loại sản phẩm không hợp lệ!");
                }
                break;

            case "0":
                alert("Thoát chương trình");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while(choice!=="0")
}
startMenu()