function hasDupChar(word:string):boolean{
    for(let i=0; i<word.length; i++){
        for(let j=i+1;j<word.length;j++){
            if(word[i]===word[j]){
                return false // co trung la->false
            }
        }
    }
    return true // khog co trung lap
}

function findLongestWord(sentence: string):string{
    let words=sentence.split(" ")//tach câu
    let longestWord=""
    for(let word of words){
        if(hasDupChar(word) && word.length>longestWord.length){
            longestWord=word
        }
    }
    return longestWord
}

let input = "hello world apple banana orange pumpkin cucumber";
console.log(findLongestWord(input));
