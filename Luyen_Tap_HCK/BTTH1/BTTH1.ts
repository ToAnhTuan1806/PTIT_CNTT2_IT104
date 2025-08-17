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

    createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null {
        const customer = this.findEntityById(this.customers, customerId)
        if (!customer) {
            alert("Không tìm thấy khách hàng!");
            return null
        }

        let orderItems: { product: Product, quantity: number }[] = []

        for (let pq of productQuantities) {
            const product = this.findEntityById(this.products, pq.productId)
            if (!product) {
                alert(`Không tìm thấy sản phẩm ID ${pq.productId}`)
                return null
            }
            if (pq.quantity > product.stock) {
                alert(`Không đủ hàng trong kho cho ${product.name}`)
                return null
            }
            product.sell(pq.quantity)
            orderItems.push({ product, quantity: pq.quantity })
        }

        const order = new Order(customer, orderItems)
        this.orders.push(order)
        return order
    }

    cancelOrder(orderId: number): void {
        const index = this.orders.findIndex(o => o.orderId === orderId)
        if (index === -1) {
            alert("Không tìm thấy đơn hàng!")
            return
        }
        const order = this.orders[index]!
        // Hoàn trả số lượng hàng
        order.products.forEach(item => item.product.restock(item.quantity))
        this.orders.splice(index, 1)
        alert(`Đã hủy đơn hàng #${orderId}`)
    }

    listAvailableProducts(): void {
        const available = this.products.filter(p => p.stock > 0)
        if (available.length === 0) {
            alert("Không có sản phẩm nào còn hàng!")
        } else {
            alert("Sản phẩm còn hàng:\n" + available.map(p => p.getProductInfo()).join("\n"))
        }
    }

    listCustomerOrders(customerId: number): void {
        const orders = this.orders.filter(o => o.customer.id === customerId)
        if (orders.length === 0) {
            alert("Khách hàng chưa có đơn hàng nào!")
        } else {
            alert("Danh sách đơn hàng:\n" + orders.map(o => o.getDetails()).join("\n"))
        }
    }

    calculateTotalRevenue(): number {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0)
    }

    countProductsByCategory(): void {
        const stats = this.products.reduce((acc: any, p) => {
            acc[p.getCategory()] = (acc[p.getCategory()] || 0) + 1
            return acc
        }, {})
        alert("Thống kê sản phẩm theo danh mục:\n" + JSON.stringify(stats))
    }

    updateProductStock(productId: number, newStock: number): void {
        const index = this.products.findIndex(p => p.id === productId)
        if (index === -1) {
            alert("Không tìm thấy sản phẩm!")
            return
        }
        if (this.products[index]) {
            this.products[index].stock = newStock;
            alert(`Đã cập nhật tồn kho cho ${this.products[index].name} = ${newStock}`);
        } else {
            alert("Sản phẩm không tồn tại!");
        }
    }

        // === HÀM GENERIC ===
    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(e => e.id === id)
    }

    showProductDetails(productId: number): void {
        const product = this.products.find(p => p.id === productId)
        if (!product) {
            alert("Không tìm thấy sản phẩm!")
        } else {
            alert(product.getProductInfo())
        }
    }
}

function startMenu(){
    let store= new Store()
    let choice:string

    do {
         choice = prompt(
            "===== MENU QUẢN LÝ CỬA HÀNG =====\n" +
            "1. Thêm khách hàng mới\n" +
            "2. Thêm sản phẩm mới\n" +
            "3. Tạo đơn hàng mới\n" +
            "4. Hủy đơn hàng\n" +
            "5. Hiển thị sản phẩm còn hàng\n" +
            "6. Hiển thị đơn hàng của khách\n" +
            "7. Tính tổng doanh thu\n" +
            "8. Thống kê sản phẩm theo danh mục\n" +
            "9. Cập nhật tồn kho\n" +
            "10. Tìm kiếm theo ID (KH/SP)\n" +
            "11. Xem chi tiết sản phẩm\n" +
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
                    alert(" Đã thêm khách hàng thành công!");
                } else {
                    alert("Thêm khách hàng thất bại (thiếu thông tin)!");
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
                    alert("Đã thêm sản phẩm điện tử!");
                } else if (type === "2") {
                    const size = prompt("Nhập kích thước:");
                    const color = prompt("Nhập màu sắc:");
                    store.addProduct(new ClothingProduct(pName!, price, stock, size!, color!));
                    alert("Đã thêm sản phẩm quần áo!");
                } else {
                    alert("Loại sản phẩm không hợp lệ!");
                }
                break;
                case "3": {
                const cid = Number(prompt("Nhập ID khách hàng:") || "0")
                const pid = Number(prompt("Nhập ID sản phẩm:") || "0")
                const qty = Number(prompt("Nhập số lượng:") || "0")
                const order = store.createOrder(cid, [{ productId: pid, quantity: qty }])
                if (order) alert("Đã tạo đơn hàng:\n" + order.getDetails())
                break
            }
            case "4": {
                const oid = Number(prompt("Nhập ID đơn hàng cần hủy:") || "0")
                store.cancelOrder(oid)
                break
            }
            case "5":
                store.listAvailableProducts()
                break
            case "6": {
                const cid = Number(prompt("Nhập ID khách hàng:") || "0")
                store.listCustomerOrders(cid)
                break
            }
            case "7":
                alert("Tổng doanh thu: " + store.calculateTotalRevenue())
                break
            case "8":
                store.countProductsByCategory()
                break
            case "9": {
                const pid = Number(prompt("Nhập ID sản phẩm:") || "0")
                const newStock = Number(prompt("Nhập tồn kho mới:") || "0")
                store.updateProductStock(pid, newStock)
                break
            }        
            case "0":
                alert("Thoát chương trình");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while(choice!=="0")
}
startMenu()