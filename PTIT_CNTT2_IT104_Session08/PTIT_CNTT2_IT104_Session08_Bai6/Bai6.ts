function findElement<T>(arr: T[], value: T):T | undefined{
    for(let i=0; i<arr.length; i++){
        if(arr[i]===value){
            return arr[i]
        }
    }
    return undefined
}
console.log(findElement([1,3,5,7,9], 5));
