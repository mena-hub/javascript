function singleLetterCount(str, letter) {
    let count = 0;
    
    for (let i=0; i<str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log("'l(s)' virgulilla ", singleLetterCount("virgulilla", "L"));
console.log("'h(s)' Chrome Console ", singleLetterCount("Chrome Console", "h"));