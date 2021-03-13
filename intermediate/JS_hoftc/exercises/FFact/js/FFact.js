function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

function isPrime(num) {
    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function numFact(num, callback) {
    return callback(num);
}

console.log(numFact(59, isEven));
console.log(numFact(59, isOdd));
console.log(numFact(59, isPrime));