function group(words) {
    const map = {};

    for (let word of words) {    
        let key = word.split('').sort().join('');
        
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }

    return Object.values(map);
}

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(group(input));
