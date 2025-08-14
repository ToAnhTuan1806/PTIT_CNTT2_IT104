class Book{
    id:number
    title:string
    author:string
    year:number
    constructor(id:number, title:string, author:string, year:number){
        this.id=id
        this.title=title
        this.author=author
        this.year=year
    }
}

class TextBook extends Book{
    grade:number
    constructor(id:number, title:string, author:string, year:number ,grade:number){
        super(id, title, author, year)
        this.grade=grade
    }
}
class Comic extends Book{
    studio:string 
     constructor(id:number, title:string, author:string, year:number ,studio:string){
        super(id, title, author, year)
        this.studio=studio
    }
}

class Library<T extends Book>{
    books: T[]=[]
    addBook(book: T):void{
        this.books.push(book)
    }
    getBookById(id: number): T | undefined{
        return this.books.find((book) => book.id===id)
    }
    removeBook(id: number): void{
        this.books=this.books.filter((book)=>book.id!==id)
    }
    updateBook(id: number, updatedBook: T): void{
        let book= this.books.find((book)=> book.id===id)
        if(book){
            book=updatedBook
        } else{
            console.log("Khong tim thay sach");
            
        }
    }
    listBooks(): T[]{
        return this.books
    }
    findBooksByTitleOrAuthor(searchTerm: string): T[] {
        return this.books.filter((book) => book.title.includes(searchTerm) || book.author.includes(searchTerm))

    }
    getTotalBooks(): number{
        return this.books.filter.length
    }
    findBooksByYear(year: number): T[]{
        return this.books.filter((book) => book.year===year)
    }
}


let lib = new Library<TextBook>