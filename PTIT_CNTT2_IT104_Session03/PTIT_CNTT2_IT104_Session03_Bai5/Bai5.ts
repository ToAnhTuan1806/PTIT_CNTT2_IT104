let firtsName:string="john"
let lastName:string="doe"

function capitalize(name:string):string{
    if(name.length===0){
        return ""
    }
    return name.charAt(0).toUpperCase()+ name.slice(1)
}
firtsName=capitalize(firtsName)
lastName=capitalize(lastName)

let fullName:string= firtsName + " " +lastName;
console.log(fullName);
