function partialUpdate<T>(obj: T, updates: Partial<T>):T{
    return{...obj, ...updates}
}

let person = { name: 'Alice', age: 30, job: 'Developer' };
let updatedPerson = partialUpdate(person, { age: 31 });

console.log(updatedPerson);