type Callback= (value: number, searchValue: number)=> boolean

const myFilter=(arr: number[], searchValue: number, callback: Callback): number[] =>{
    let result: number[]=[]
    for(let i=0; i<arr.length; i++){
        let value=arr[i]!
        if(callback(value, searchValue)){
            result.push(value)
        }
    }
    return result
}
const callBackFnc: Callback = (value, searchValue) => value === searchValue
let numbers: number[] = [1, 2, 2, 3, 4, 5, 6];
console.log(myFilter(numbers, 2, callBackFnc))
console.log(myFilter(numbers, 10, callBackFnc))