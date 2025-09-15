type Callback= (value: number, index: number, arr: number[])=> void

const myForEach= (arr: number[], callback: Callback): void => {
    for(let i=0; i<arr.length; i++){
        callback(arr[i]!, i, arr)
    }
}

const callBackFnc: Callback= (value, index, arr)=> {
    console.log(`Vị trí: ${index} | Phần tử: ${value} | Mảng:`, arr);
    
}
let numbers: number[] = [1, 2, 3, 4, 5, 6];
myForEach(numbers, callBackFnc)