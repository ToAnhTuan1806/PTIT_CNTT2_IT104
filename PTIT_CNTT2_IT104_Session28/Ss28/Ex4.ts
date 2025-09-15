type Callback= (value: number)=> void

const displayNumbers= (callback: Callback, delay:number):void=>{
    let current= 1
    setInterval(()=>{
        callback(current)
        current++
    }, delay)
}

const callBackFnc: Callback= (value:number): void=> {
    console.log("Gia tri thu: ", value);
    
}
displayNumbers(callBackFnc, 1000)
