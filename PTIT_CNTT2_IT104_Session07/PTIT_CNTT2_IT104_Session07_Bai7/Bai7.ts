class Account{
    public accountNumber:string
    protected balance: number
    protected history:string[]
    protected status:string

    constructor(accountNumber:string, balance:number, status:string){
        this.accountNumber=accountNumber
        this.balance=balance
        this.history=[]
        this.status=status
    }

    deposit(amount:number):void{
        if(amount<=0){
            console.log("So tien nap phai lon hon 0");
            return
        }
        this.balance += amount
        this.history.push(`Nap ${amount} vao TK. So su: ${this.balance}`)
    }

    withdraw(amount:number):void{
        if(amount<=0){
            console.log("So tien rut phai lon hon 0");
            return
        }
        if(amount>this.balance){
            console.log("So du khong du de rut");
            return
        }
        this.balance -=amount
        this.history.push(`Rut ${amount} tu TK. So du: ${this.balance}`)
    }

    showHistory():void{
        console.log(`Lich su giao dich tai khoan ${this.accountNumber}: `);
        
        if(this.history.length===0){
            console.log("Khong co giao dich");
            
        }else{
            this.history.forEach((item, index) =>{
                console.log(`${index+1}.${item}`);
                
            })
        }
    }
}

class SavingAccount extends Account{
    interestRate:number
    constructor(accountNumber: string, balance: number, status: string, interestRate: number) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }

    withdraw(amount: number): void {
        if(amount<=0){
            console.log("So tien rut phai lon hon 0");
            return
        }
        if(amount>=this.balance){
            console.log(`Ban da rut het so du: ${this.balance}`);
            amount=this.balance
            
        }
        this.balance-=amount
        this.history.push(`Rut ${amount} tu TK. So du: ${this.balance}`)
    }
}


let saving1 = new SavingAccount("TK001", 5000, "active", 0.05);

saving1.deposit(2000);  
saving1.withdraw(3000);  
saving1.withdraw(6000); 
saving1.showHistory();
