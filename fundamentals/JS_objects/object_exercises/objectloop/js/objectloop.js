let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

programming.difficulty = 7;

delete programming.jokes;

programming.isFun = true;

for (let language of programming.languages) {
    console.log("Lenguaje", language);
}
console.log("\n");

for (let key in programming) {
    console.log("Clave", key);
}
console.log("\n");

for (let key in programming) {
    console.log("Valor", programming[key]);
}
console.log("\n");