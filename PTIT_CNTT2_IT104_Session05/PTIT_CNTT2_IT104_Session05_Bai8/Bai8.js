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
    getTitle() {
        return this.title;
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
    findBookByTitle(word) {
        let foundBooks = this.books.filter(book => book.getTitle().toLowerCase().includes(word.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log(`Tim thay: ${foundBooks.length} sach voi ten "${word}"`);
            foundBooks.forEach(book => console.log(book.getInfo()));
        }
        else {
            console.log(`"Khong tim thay sach voi ten "${word}"`);
        }
    }
}
let book1 = new Book(1, "Conan", "Aoyama Gōshō");
let book2 = new Book(2, "Doraemon", "Fujiko F. Fujio");
let myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.viewBooks();
myLibrary.findBookByTitle("Conan");
