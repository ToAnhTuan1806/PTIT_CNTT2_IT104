class Book{
    private id:number
    private title:string
    private author:string

    constructor(id:number, title:string, author:string){
        this.id=id
        this.title=title
        this.author=author
    }
    getInfo():string{
         return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}`
    }
}

class Library{
    private books: Book[]=[]

    addBook(book:Book):void{
        this.books.push(book)
    }
    viewBooks():void{
        this.books.forEach(book =>{
            console.log(book.getInfo());
        })
    }
}

let book1 = new Book(1, "Conan", "Aoyama Gōshō");
let book2 = new Book(2, "Doraemon", "Fujiko F. Fujio");

let myLibrary= new Library()

myLibrary.addBook(book1)
myLibrary.addBook(book2)

myLibrary.viewBooks()