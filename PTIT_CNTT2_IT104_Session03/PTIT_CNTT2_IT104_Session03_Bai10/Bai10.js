"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasDupChar(word) {
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false; // co trung la->false
            }
        }
    }
    return true; // khog co trung lap
}
function findLongestWord(sentence) {
    let words = sentence.split(" "); //tach câu
    let longestWord = "";
    for (let word of words) {
        if (hasDupChar(word) && word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
let input = "hello world apple banana orange pumpkin cucumber";
console.log(findLongestWord(input));
