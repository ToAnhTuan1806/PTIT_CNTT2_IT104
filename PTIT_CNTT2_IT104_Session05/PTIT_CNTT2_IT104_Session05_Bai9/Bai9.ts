class Book{
    private id:number
    private title:string
    private author:string
    private year:number

    constructor(id:number, title:string, author:string, year:number){
        this.id=id
        this.title=title
        this.author=author
        this.year=year
    }
    getInfo():string{
         return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    }
    getId():number{
        return this.id
    }
    updateInfo(title:string, author:string, year:number):void{
        this.title=title
        this.author=author
        this.year=year
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
    updateBookById(id:number, newTitle:string, newAuthor:string, newYear:number):boolean{
        let book=this.books.find(b => b.getId()===id)
        if(book){
            book.updateInfo(newTitle, newAuthor, newYear)
            return true
        }
        return false
    }
    deleteBookById(id:number):boolean{
        let index= this.books.findIndex(b => b.getId()=== id)
        if(index!=-1){
            this.books.splice(index,1)
            return true
        }
        return false
    }
}

let book1 = new Book(1, "Conan", "Aoyama Gōshō", 1994);
let book2 = new Book(2, "Doraemon", "Fujiko F. Fujio", 1970);

let myLibrary= new Library()

myLibrary.addBook(book1)
myLibrary.addBook(book2)

myLibrary.viewBooks()

if(myLibrary.updateBookById(1, "Conan - Tập đặc biệt", "Aoyama Gōshō", 1996)){
    console.log("\nCập nhật thành công\n");
    
}else{
    console.log("\nKhông tìm thấy sách để cập nhật");
}

console.log("Danh sach sau khi cập nhật: ");
myLibrary.viewBooks()

if(myLibrary.deleteBookById(2)){
    console.log(`\nXoa sach Id thanh cong\n`);
    
}else{
    console.log("\nKhong tim thay sach de xoa");
    
}
console.log("Danh sach sau khi xoa: ");
myLibrary.viewBooks()