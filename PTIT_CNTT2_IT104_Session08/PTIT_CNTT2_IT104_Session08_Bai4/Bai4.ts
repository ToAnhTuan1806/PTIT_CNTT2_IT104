function mergeObjects<T, U>(obj1: T, obj2:U): T&U{
    return {...obj1, ...obj2}
}

let product = { id: 101, name: "Laptop" };
let stock = { quantity: 50, location: "Hà Nội" };

let merged2 = mergeObjects(product, stock);
console.log(merged2);