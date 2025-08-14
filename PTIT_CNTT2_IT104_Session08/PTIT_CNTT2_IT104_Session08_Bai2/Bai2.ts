function check<T extends boolean>(value: T):void{
    if(value){
        console.log("Xin chao");
        
    }else{
        console.log("Tam biet");
        
    }
}
let isGreeting: boolean=true
check(isGreeting)