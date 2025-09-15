type Callback= (value: number)=> void

const processArray= (arr: number[], callback: Callback):void=>{
    arr.forEach((value:number, index:number)=> {
        setTimeout(()=> {
            callback(value)
        }, index*1000)
    })
}

const callBackFnc: Callback= (value:number): void=> {
    console.log("Phan tu: ", value);
    
}
processArray([10, 20, 30, 40, 50], callBackFnc)
