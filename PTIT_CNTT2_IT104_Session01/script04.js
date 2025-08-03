
function checkParity(a) {
    let num=Number(a);
    if(isNaN(num)){
        return "a is not a number";
    }

    if(a%2==0){ 
        return `${a} is an even number`;
    }else{
        return `${a} is odd`;
    }
}

console.log(checkParity(10));
console.log(checkParity("7"));
console.log(checkParity("xyz"));