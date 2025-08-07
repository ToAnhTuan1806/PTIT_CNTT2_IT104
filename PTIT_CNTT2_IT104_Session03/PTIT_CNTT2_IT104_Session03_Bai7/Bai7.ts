let removeDupString=(str:string):string=>{
    let result=""

    for(let i=0; i<str.length; i++){
        let char=str[i]
        if (char && !result.includes(char)) {
            result += char;
        }
    }
    return result
}
console.log(removeDupString("banana"));