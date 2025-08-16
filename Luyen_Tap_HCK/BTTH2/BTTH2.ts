class Customer{
    private id: number
    private name: string
    private phone: string
    private license: string
    constructor(id: number, name: string, phone: string, license: string){
        this.id=id
        this.name=name
        this.phone=phone
        this.license=license
    }
    getID(): number{
        return this.id
    }

    getDetails(): void{
        console.log(`Khách hàng: #${this.id}, Ten: ${this.name}, SDT: ${this.phone}, GPLX: ${this.license}`);
    }
}

abstract class Vehicle{
    private vehicleId: number
    brand: string
    model: string
    basePrice: number
    status: string
    constructor(vehicleId: number, brand: string, model:string, basePrice:number, status: string = "Sẵn sàng"){
        this.vehicleId=vehicleId
        this.brand=brand
        this.model=model
        this.basePrice=basePrice
        this.status=status
    }
    getId():number{
        return this.vehicleId
    }

    updateStatus(status: string): void{
        this.status=status
    }

    abstract calculateSurcharge(days: number): number

        getDetails(): void {
        console.log(`Xe #${this.vehicleId}: ${this.brand} ${this.model}, Giá: ${this.basePrice}/ngày, Trạng thái: ${this.status}`);
    }
}

class Motorbike extends Vehicle{
    calculateSurcharge(days: number): number {
        if(days>5){
            return (days-5)*2000
        }else{
            return 0
        }
    }
}

class Car extends Vehicle{
    calculateSurcharge(days: number): number {
        if(days>7){
            return (days-7)*100000
        }else{
            return 0
        }
    }
}

class Truck extends Vehicle{
    calculateSurcharge(days: number): number {
        if(days>3){
            return (days-3)*200000
        }else{
            return 0
        }
    }
}

class RentalContract{
    contractId: number
    customer: Customer
    vehicle: Vehicle
    days: number
    totalCost: number
    constructor(contractId: number, customer: Customer, vehicle: Vehicle, days: number){
        this.contractId=contractId
        this.customer=customer
        this.vehicle=vehicle
        this.days=days
        this.totalCost= days * vehicle.basePrice + vehicle.calculateSurcharge(days)
    }
    getId():number{
        return this.contractId
    }

    getDetails(): void {
        console.log(`Hợp đồng #${this.contractId}:`);
        this.customer.getDetails();
        this.vehicle.getDetails();
        console.log(`Số ngày thuê: ${this.days}, Tổng chi phí: ${this.totalCost} VNĐ\n`);
    }
}

 class Repository<T extends Record<string, any>>{
    items: T[]=[]

    add(item: T): void{
        this.items.push(item)
    }

        getAll(): T[] {
        return this.items;
    }
 }

class RentalSystemManager{
    customersRepo: Repository<Customer>
    vehiclesRepo: Repository<Vehicle>
    contractsRepo: Repository<RentalContract>
    private contractCounter: number

        constructor() {
        this.customersRepo = new Repository<Customer>();
        this.vehiclesRepo = new Repository<Vehicle>();
        this.contractsRepo = new Repository<RentalContract>();
        this.contractCounter = 1;
    }

    addCustomer(id: number, name: string, phone: string, license: string): void{
        let cus= new Customer(id, name, phone, license)
        this.customersRepo.add(cus)
        console.log("Them KH thanh cong");
    }

    addVehicle(type: string, id: number, brand: string, model: string, price: number): void {
        let v: Vehicle;

        if (type === "motorbike") {
            v = new Motorbike(id, brand, model, price);
        } else if (type === "car") {
            v = new Car(id, brand, model, price);
        } else {
            v = new Truck(id, brand, model, price);
        }

        this.vehiclesRepo.add(v);
        console.log("Thêm xe thành công!");
    }

    createContract(customerId: number, vehicleId: number, days: number): void {
        let customer = this.customersRepo.getAll().find(c => c.getID() === customerId);

        let vehicle = this.vehiclesRepo.getAll().find(v => v.getId() === vehicleId);

        if (!customer || !vehicle) {
            console.log("Khong tim thay KH tren xe");
            return;
        }

        if (vehicle.status !== "Sẵn sàng") {
            console.log("Xe khong san sang cho thue");
            return;
        }

        vehicle.updateStatus("Dang cho thue");

        let contract = new RentalContract(this.contractCounter++, customer, vehicle, days);
        this.contractsRepo.add(contract);

        console.log("Tao hop dong thanh cong");
        contract.getDetails();
    }

    

    listAvailableVehicles(): void {
        console.log("Danh sach xe san san:");
        this.vehiclesRepo.getAll().filter(v => v.status === "Sẵn sàng").forEach(v => {
            v.getDetails();
        });
    }

    listContractsByCustomer(customerId: number): void {
        console.log(`Hop dong cua KH #${customerId}:`);
        this.contractsRepo.getAll()
            .filter(c => c.customer.getID() === customerId)
            .forEach(c => {
                c.getDetails();
            });
    }

        updateVehicleStatus(vehicleId: number, status: string): void {
        let vehicle = this.vehiclesRepo.getAll().find(v => v.getId() === vehicleId);
        if (!vehicle) {
            console.log("❌ Không tìm thấy xe với ID:", vehicleId);
            return;
        }
        vehicle.updateStatus(status);
        console.log(` Đã cập nhật trạng thái xe #${vehicleId} thành "${status}"`);
    }

}


function startMenu() {
    let manager = new RentalSystemManager();
    let choice: string;

    do {
        choice = prompt(
            "===== MENU QUẢN LÝ HỆ THỐNG THUÊ XE =====\n" +
            "1. Thêm khách hàng\n" +
            "2. Thêm xe\n" +
            "3. Tạo hợp đồng thuê\n" +
            "4. Cập nhật trạng thái xe\n" +
            "5. Hiển thị xe sẵn sàng cho thuê\n" +
            "8. Hiển thị hợp đồng của 1 khách hàng\n" +
            "9. Thoát\n" +
            "===============================\n" +
            "Nhập lựa chọn: "
        ) || "9";

        switch (choice) {
            case "1": {
                let id = manager.customersRepo.getAll().length + 1;
                let name = prompt("Nhập tên khách hàng:") || "NoName";
                let phone = prompt("Nhập số điện thoại:") || "000000";
                let license = prompt("Nhập GPLX:") || "N/A";
                manager.addCustomer(id, name, phone, license);
                break;
            }
            case "2": {
                let id = manager.vehiclesRepo.getAll().length + 1;
                let type = prompt("Nhập loại xe (motorbike/car/truck):") || "motorbike";
                let brand = prompt("Nhập hãng xe:") || "Unknown";
                let model = prompt("Nhập model xe:") || "Unknown";
                let price = Number(prompt("Nhập giá thuê theo ngày:") || "0");
                manager.addVehicle(type, id, brand, model, price);
                break;
            }
            case "3": {
                let customerId = Number(prompt("Nhập ID khách hàng:") || "0");
                let vehicleId = Number(prompt("Nhập ID xe:") || "0");
                let days = Number(prompt("Nhập số ngày thuê:") || "1");
                manager.createContract(customerId, vehicleId, days);
                break;
            }
            case "4": {
                let vId = Number(prompt("Nhập ID xe cần cập nhật:") || "0");
                let newStatus = prompt("Nhập trạng thái mới (Sẵn sàng/Dang cho thue/Bao tri):") || "Sẵn sàng";
                manager.updateVehicleStatus(vId, newStatus);
                break;
            }
            case "5":
                manager.listAvailableVehicles();
                break
            case "8": {
                let customerId = Number(prompt("Nhập ID khách hàng:") || "0");
                manager.listContractsByCustomer(customerId);
                break;
            }
            case "9": {
                alert("Thoát chương trình!");
                break;
            }
            default: {
                alert("Lựa chọn không hop le");
            }
        }
    } while (choice !== "9");
}


startMenu();
