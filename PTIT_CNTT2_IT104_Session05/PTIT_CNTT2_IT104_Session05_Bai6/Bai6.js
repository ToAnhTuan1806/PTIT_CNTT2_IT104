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
}
let book1 = new Book(1, "Conan", "Aoyama Gōshō");
let book2 = new Book(2, "Doraemon", "Fujiko F. Fujio");
let myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.viewBooks();
