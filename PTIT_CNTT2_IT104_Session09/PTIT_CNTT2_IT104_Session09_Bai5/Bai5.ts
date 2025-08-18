class DataStore<T>{
    private data: T[]=[]

    add(item:T):void{
        this.data.push(item)
    }

    getAll():T[]{
        return this.data
    }

    remove(index:number):void{
        if(index>=0 && index<this.data.length){
            this.data.splice(index, 1)
        }else{
            console.log("khong hop le");
            
        }
    }
}

let store = new DataStore<number>();
store.add(10);
store.add(20);
console.log(store.getAll());
store.remove(0);
console.log(store.getAll()); 