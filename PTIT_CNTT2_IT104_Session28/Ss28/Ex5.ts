type Callback= (result: boolean)=> void
const checkCondition= (condition: boolean, callback: Callback): void => {
    setTimeout(()=>{
        callback(condition)
    }, 1000)
}
const callBackFnc: Callback= (result: boolean): void=> {
    console.log("Dieu kien tra ve:", result);
    
}
checkCondition(true, callBackFnc)
checkCondition(false, callBackFnc)