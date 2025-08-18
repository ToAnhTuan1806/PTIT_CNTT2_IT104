function wrapInArray<T>(arr: T):T[]{
    return [arr]
}

console.log(wrapInArray(5))
console.log(wrapInArray("hello"))
console.log(wrapInArray({ a: 1 }))