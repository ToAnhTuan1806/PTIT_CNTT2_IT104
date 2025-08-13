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

let acc1 = new userAcc(1, "tuan123", "123456", "user", "active");
let acc2 = new userAcc(2, "moi456", "abcdef", "user", "banned");

acc1.login(); 
acc1.logout(); 

acc2.login();
acc2.logout();