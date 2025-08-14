"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partialUpdate(obj, updates) {
    return { ...obj, ...updates };
}
let person = { name: 'Alice', age: 30, job: 'Developer' };
let updatedPerson = partialUpdate(person, { age: 31 });
console.log(updatedPerson);
