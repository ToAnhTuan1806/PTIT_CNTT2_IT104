type Callback= ()=> void

const delayedCallback= (callback:Callback, delay: number): void=> {
    setTimeout(callback, delay)
}

const callBackFnc: Callback=()=> {
    console.log("Da goi callback sau tg delay");
    
}
delayedCallback(callBackFnc, 3000)
