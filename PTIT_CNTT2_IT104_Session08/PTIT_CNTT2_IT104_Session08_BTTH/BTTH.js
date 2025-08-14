"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class TextBook extends Book {
    grade;
    constructor(id, title, author, year, grade) {
        super(id, title, author, year);
        this.grade = grade;
    }
}
class Comic extends Book {
    studio;
    constructor(id, title, author, year, studio) {
        super(id, title, author, year);
        this.studio = studio;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    getBookById(id) {
        return this.books.find((book) => book.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
    updateBook(id, updatedBook) {
        let book = this.books.find((book) => book.id === id);
        if (book) {
            book = updatedBook;
        }
        else {
            console.log("Khong tim thay sach");
        }
    }
    listBooks() {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm) {
        return this.books.filter((book) => book.title.includes(searchTerm) || book.author.includes(searchTerm));
    }
    getTotalBooks() {
        return this.books.filter.length;
    }
    findBooksByYear(year) {
        return this.books.filter((book) => book.year === year);
    }
}
let lib = new Library;
