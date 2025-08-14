enum weekDays {
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wednesday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật"
}

function printEnum<T>(enumObj:T):void{
    for(let key in enumObj){
        if(isNaN(Number(key))){
            console.log((enumObj as any)[key])
            
        }
    }
}
printEnum(weekDays);