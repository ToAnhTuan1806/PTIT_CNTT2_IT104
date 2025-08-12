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
            console.log(`ID: ${book.id}, Tieu de: ${book.title}, Tac gia: ${book.author}, So luong: ${book.stock}, Tinh trang: ${book.status}`);
        });
    }
}
let myLibrary = new Library();
let book1 = new Book(1, "Lập trình C cơ bản", "Nguyễn Văn A", 5, "Available");
let book2 = new Book(2, "TypeScript nâng cao", "Trần Văn B", 3, "Borrowed");
let book3 = new Book(3, "Cấu trúc dữ liệu & Giải thuật", "Phạm Văn D", 4, "Available");
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.showBook();
