function mergeObjects<T, U>(obj1:T, obj2:U):T&U{
    return {...obj1, ...obj2}
}

let person = { name: "Join" }

let job = { role: "Developer" }

console.log(mergeObjects(person, job));
