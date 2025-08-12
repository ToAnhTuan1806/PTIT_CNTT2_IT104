"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id;
    name;
    contact;
    lendedBooks = [];
    status;
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
}
class LendedBook {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books = [];
    members = [];
    addBook(book) {
        this.books.push(book);
        console.log(`Da them sach: ${book.title}`);
    }
    showBook() {
        if (this.books.length === 0) {
            console.log("Khong co sach");
            return;
        }
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Tieu de: ${book.title}, Tac gia: ${book.author}, So luong: ${book.stock}, Tinh trang: ${book.status}\n`);
        });
    }
    registerMember(id, name, contact, status) {
        let member = new Member(id, name, contact, status);
        this.members.push(member);
    }
    blockMember(memberId) {
        let member = this.members.find(mb => mb.id === memberId);
        if (member) {
            member.status = "Blocked";
            console.log(`Thanh vien ${member.name} da bi khoa`);
        }
        else {
            console.log("Khong tim thay thanh vien");
        }
    }
    showMembers() {
        if (this.members.length === 0) {
            console.log("Khong co thanh vien nao");
            return;
        }
        this.members.forEach(member => {
            console.log(`ID: ${member.id}, Ten: ${member.name}, Lien he: ${member.contact}, Trang thai: ${member.status}\n`);
        });
    }
}
let myLibrary = new Library();
let book1 = new Book(1, "Lập trình C cơ bản", "Nguyễn Văn A", 5, "Available");
let book2 = new Book(2, "TypeScript nâng cao", "Trần Văn B", 3, "Borrowed");
let book3 = new Book(3, "Cấu trúc dữ liệu & Giải thuật", "Phạm Văn D", 4, "Available");
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.showBook();
myLibrary.registerMember(1, "Nguyễn Văn X", "0123456789", "Active");
myLibrary.registerMember(2, "Trần Thị Y", "0987654321", "Active");
myLibrary.registerMember(3, "Lê Văn Z", "0111222333", "Active");
myLibrary.showMembers();
myLibrary.blockMember(2);
myLibrary.showMembers();
