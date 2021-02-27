function multipleLetterCount(str) {
    let object = {};

    for (let i=0; i<str.length; i ++) {
        if (!(str[i] in object)) {
            object[str[i]] = 1;
        } else {
            object[str[i]]++;
        }
    }
    return object;
}

console.log(multipleLetterCount("paralelepípedo"));
console.log(multipleLetterCount("gato"));