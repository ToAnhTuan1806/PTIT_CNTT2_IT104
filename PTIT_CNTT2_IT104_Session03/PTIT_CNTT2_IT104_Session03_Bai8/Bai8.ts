function add(a:number | string, b:number | string): number | string{
    let numA=Number(a);
    let numB=Number(b);
    if(isNaN(numA)||isNaN(numB)){
        return "Khong hop le"
    }
    return numA+numB;
}

function subtract(a:number | string, b:number | string): number | string{
    let numA=Number(a);
    let numB=Number(b);
    if(isNaN(numA)||isNaN(numB)){
        return "Khong hop le"
    }
    return numA-numB;
}

function multiply(a:number | string, b:number | string): number | string{
    let numA=Number(a);
    let numB=Number(b);
    if(isNaN(numA)||isNaN(numB)){
        return "Khong hop le"
    }
    return numA*numB;
}

function divide(a:number | string, b:number | string): number | string{
    let numA=Number(a);
    let numB=Number(b);
    if(isNaN(numA)||isNaN(numB)){
        return "Khong hop le"
    }
    if(numB===0){
        return "khong the chia cho 0"
    }
    return numA/numB;
}

console.log(add(6, "12"));       
console.log(subtract("30", 6));    
console.log(multiply("6", "4"));  
console.log(divide("6", 6));    