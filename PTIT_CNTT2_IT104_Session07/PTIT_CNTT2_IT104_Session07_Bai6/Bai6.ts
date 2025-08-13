class Account{
    public id:number
    public userName: string
    private password: string
    public isLogin: boolean
    public role:string

    constructor(id:number, userName:string, password:string, role:string){
        this.id=id
        this.userName=userName
        this.password=password
        this.isLogin=false
        this.role=role
    }

    login():void{

    }
    logout():void{
        if(this.isLogin){
            this.isLogin=false
            console.log("Dang xuat thanh cong");
        }
    }
}

class userAcc extends Account{
    status:string
    constructor(id:number, userName:string, password:string, role:string, status:string){
        super(id, userName, password, role)
        this.status=status
    }
    login(): void {
        if(this.status==="active"){
            this.isLogin=true
            console.log("Dang nhap thanh cong");
            
        }else if(this.status==="banned"){
            console.log("Tai khoan da bi khoa");
            
        }
    }
}

class adminAcc extends Account{
    constructor(id:number, userName:string, password:string, role:string){
        super(id, userName, password, role)
    }

    banUser(user: userAcc):void{
        user.status= "banned"
        console.log(`Nguoi dung ${user.userName} da bi khoa`);
        
    }
}

let user1 = new userAcc(1, "tuan123", "123456", "user", "active");
let user2 = new userAcc(2, "hoa456", "abcdef", "user", "active");
let user3 = new userAcc(3, "bao789", "qwerty", "user", "banned");

let admin1 = new adminAcc(99, "admin01", "adminpass", "admin");

console.log("\n--- Test đăng nhập ban đầu ---");
user1.login();
user2.login();
user3.login();

console.log("\n--- Admin khóa user2 ---");
admin1.banUser(user2);

console.log("\n--- Thử đăng nhập lại sau khi bị khóa ---");
user2.login();

console.log("\n--- User1 đăng xuất ---");
user1.logout();