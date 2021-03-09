try {
    if (Math.random()>=.5) {
        throw "Throw GreaterError";
    }
    console.log("Try: LessSuccess");
    console.log("Pseudo-aleatorio menor que .5");
} catch (e) {
    console.log("Catch:", e);
    console.log("Pseudo-aleatorio mayor que .5");

} 

console.log("Moving on");