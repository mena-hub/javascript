function  onlyCapitalLetters(str) {
    let newStr = "";
    
    for (let i=0; i<str.length; i++) {
        if (str[i].charCodeAt(0)<91 && str[i].charCodeAt(0)>64) {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(onlyCapitalLetters("Desconcertante"));
console.log(onlyCapitalLetters("nada"));
console.log(onlyCapitalLetters("TODO"));