// b1: Đn~ kiểu dữ liệu cho callBackfnc
type Callback= (result: number)=> void
// b2: Xd hàm calculate(a,b,callBackfnc)
const calculate= (a:number, b:number, callback: Callback)=>{
    let sum= a+b
    callback(sum)
}
// b3: viet ham callBackFnc (in ra kq)
const callBackFnc= (result: number)=> {
    console.log("Ket qua: ", result); 
}
// b4: gọi hàm
calculate(18, 6, callBackFnc)
