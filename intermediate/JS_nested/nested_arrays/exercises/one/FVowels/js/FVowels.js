let nested = [
  "hojalata",
  ["alfil", ["tinta"]],
  ["luminiscente", ["mermar", ["fauna"], "ajenjo"]],
  "rayos"
];

function seeIfVowel(char, count) {
    let vowels = "aeiou";
    if (vowels.includes(char.toLowerCase())) {
        return ++count;
    }
    return count;
}

function countCharacters(str, count) {
    for (let i = 0; i < str.length; i++) {
        count = seeIfVowel(str[i], count);
    }
    return count;
}

function countVowels() {
    let str = nested.toString();
    let count = 0;
    count = countCharacters(str, count);
    return count;
}