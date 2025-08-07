let myString= "hello world apple banana orange pumpkin cucumber"
function checkSubString(string:string):string{
    // B1: Tạo ra 1 mang các từ trong chuỗi truyền vào
    // ["hello", "world", ...]
    let words: string[]= string.split(" ");
    let result=""
    // Duyet tung tu trong mang cac tu con
    words.forEach((word) =>{
        // B2: Tao ra cac Set tu cac tu con
        let charSet = new Set(word)
        // Kiem tra tu co ky tu trung nhau hay khong
        if(charSet.size===word.length){
            // B3: So sanh do dai Set voi do dai result
            if(charSet.size>=result.length){
                // 3.1: neu lon hon thi gan lai result moi
                result=word
            }
        }
    })


    return result
}
console.log(checkSubString(myString));

