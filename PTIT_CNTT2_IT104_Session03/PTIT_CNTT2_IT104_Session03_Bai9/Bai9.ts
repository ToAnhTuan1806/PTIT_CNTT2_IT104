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

function power(base:number, exponent:number):number{
    return Math.pow(base, exponent);
}

function sqrt(base:number, root:number):number{
    return Math.pow(base, 1/root);
}

function factorial(n:number):number|string{
    if(n<0 || !Number.isInteger(n)){
        return "so khong hop le"
    }
    let result=1
    for(let i=2; i<=n; i++){
        result *=i
    }
    return result
}

function phepTinh(operator: string):void{
    let input1=document.getElementById("input1") as HTMLInputElement //as HTMLInputElement là cách để ép kiểu (type assertion)
    let input2=document.getElementById("input2") as HTMLInputElement
    let resultDisplay=document.getElementById("result") as HTMLElement

    let num1=Number(input1.value)
    let num2=Number(input2.value)

    if(isNaN(num1) || (operator !== "!" && isNaN(num2))){
        resultDisplay.textContent= "Du lieu khong hop le"
        return
    }

    let result: number|string
    switch(operator){
        case "+":
            result=add(num1,num2)
            break;
        case "-":
            result=subtract(num1,num2)
            break
        case "*":
            result=multiply(num1,num2)
            break
        case "/":
            result=divide(num1,num2)
            break
        case "^":
            result=power(num1,num2)
            break
        case "√":
            result=sqrt(num1,num2)
            break
        case "!":
            result=factorial(num1)
            break    
        default:
            result="Phep toan khong ho tro"    
    }
    resultDisplay.textContent= "Kết quả: "+ result;
}