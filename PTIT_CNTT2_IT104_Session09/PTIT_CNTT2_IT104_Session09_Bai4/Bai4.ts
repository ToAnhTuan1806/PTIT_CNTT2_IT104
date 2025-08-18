function withDefault<T>(value?: T):T{
    if(value!==undefined){
        return value
    }
    return "default" as unknown as T
}

console.log(withDefault()); 
console.log(withDefault(42)); 
console.log(withDefault(true));