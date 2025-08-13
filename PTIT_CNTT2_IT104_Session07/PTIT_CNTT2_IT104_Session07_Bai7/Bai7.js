"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    accountNumber;
    balance;
    history;
    status;
    constructor(accountNumber, balance, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("So tien nap phai lon hon 0");
            return;
        }
        this.balance += amount;
        this.history.push(`Nap ${amount} vao TK. So su: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("So tien rut phai lon hon 0");
            return;
        }
        if (amount > this.balance) {
            console.log("So du khong du de rut");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rut ${amount} tu TK. So du: ${this.balance}`);
    }
    showHistory() {
        console.log(`Lich su giao dich tai khoan ${this.accountNumber}: `);
        if (this.history.length === 0) {
            console.log("Khong co giao dich");
        }
        else {
            this.history.forEach((item, index) => {
                console.log(`${index + 1}.${item}`);
            });
        }
    }
}
class SavingAccount extends Account {
    interestRate;
    constructor(accountNumber, balance, status, interestRate) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("So tien rut phai lon hon 0");
            return;
        }
        if (amount >= this.balance) {
            console.log(`Ban da rut het so du: ${this.balance}`);
            amount = this.balance;
        }
        this.balance -= amount;
        this.history.push(`Rut ${amount} tu TK. So du: ${this.balance}`);
    }
}
class CheckingAccount extends Account {
    overdraftLimit;
    constructor(accountNumber, balance, status, overdraftLimit) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("So tien rut phai lon hon 0");
            return;
        }
        if (amount > this.balance + this.overdraftLimit) {
            console.log(`Khong the rut qua han muc. Gioi han: ${this.overdraftLimit}`);
            return;
        }
        this.balance -= amount;
        this.history.push(`Rut ${amount} tu TK thanh toan. So du: ${this.balance}`);
    }
}
let saving1 = new SavingAccount("TK001", 5000, "active", 0.05);
saving1.deposit(2000);
saving1.withdraw(3000);
saving1.withdraw(6000);
saving1.showHistory();
let checking1 = new CheckingAccount("TK002", 2000, "active", 1000);
checking1.deposit(500);
checking1.withdraw(2500);
checking1.withdraw(2000);
checking1.showHistory();
