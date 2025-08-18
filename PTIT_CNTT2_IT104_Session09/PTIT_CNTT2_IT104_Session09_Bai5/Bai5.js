"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStore {
    data = [];
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
        else {
            console.log("khong hop le");
        }
    }
}
let store = new DataStore();
store.add(10);
store.add(20);
console.log(store.getAll());
store.remove(0);
console.log(store.getAll());
