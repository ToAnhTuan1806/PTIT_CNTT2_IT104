class Animal{
    private name:string
    protected age:number
    public species: string

    constructor(name:string, age:number, species:string){
        this.name=name
        this.age=age
        this.species=species
    }
    speak(): void{
        console.log(`${this.name} phát ra âm thanh`);
    }
    getName():string{
        return this.name
    }
    setName(n:string):void{
        this.name=n
    }
    getAge():number{
        return this.age
    }
    setAge(a:number):void{
        this.age=a
    }
}

class Dog extends Animal{
    public bread:string;
     constructor(name:string, age:number, species:string, bread:string){
        super(name, age, species)
        this.bread=bread
     }
     speak(): void {
         console.log("Woof!");
     }
}
class Cat extends Animal{
    public bread:string;
     constructor(name:string, age:number, species:string, bread:string){
        super(name, age, species)
        this.bread=bread
     }
     speak(): void {
         console.log("Meow Meow!");
     }
}
class Rabit extends Animal{
    public bread:string;
     constructor(name:string, age:number, species:string, bread:string){
        super(name, age, species)
        this.bread=bread
     }
     speak(): void {
         console.log("Squeak!");
     }
}

let randomAnimal= new Animal("animal", 10, "Mamal")
console.log(randomAnimal.getName());
console.log(randomAnimal.getAge());
console.log(randomAnimal.species);
randomAnimal.speak()

let dog=new Dog("Moi", 3, "Mamal", "Husky")
console.log(dog.getName());
console.log(dog.getAge());
console.log(dog.species);
console.log(dog.bread);
dog.speak()