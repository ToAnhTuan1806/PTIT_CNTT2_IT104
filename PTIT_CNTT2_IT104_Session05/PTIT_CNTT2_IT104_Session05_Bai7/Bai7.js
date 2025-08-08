"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}`;
    }
    getId() {
        return this.id;
    }
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        this.books.forEach(book => {
            console.log(book.getInfo());
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        let book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            return true;
        }
        return false;
    }
}
let book1 = new Book(1, "Conan", "Aoyama Gōshō");
let book2 = new Book(2, "Doraemon", "Fujiko F. Fujio");
let myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.viewBooks();
if (myLibrary.updateBookById(1, "Conan - Tập đặc biệt", "Aoyama Gōshō")) {
    console.log("\nCập nhật thành công\n");
}
else {
    console.log("\nKhông tìm thấy sách để cập nhật");
}
console.log("Danh sach sau khi cập nhật: ");
myLibrary.viewBooks();
