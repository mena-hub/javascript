function numberCompare(a, b) {
    if (a === b) {
        return "Los números son iguales";
    } else if (a>b){
        return "Es mayor el 1er. número";
    }
    return "Es mayor el 2do. número";
}

console.log(numberCompare(1, 1));
console.log(numberCompare(2, 1));
console.log(numberCompare(1, 2));