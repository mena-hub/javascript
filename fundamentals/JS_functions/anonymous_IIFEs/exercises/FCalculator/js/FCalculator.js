function createCalculator(){
    return {
        add: function(a, b) {
            return a + b;
        },
        subtract: function(a, b) {
            return a - b;
        },
        multiply: function(a, b) {
            return a * b;
        },
        divide: function(a, b) {
            return a / b;
        }
    };
}

let calculate = createCalculator();

console.log("Resultado + ", calculate.add(20, 20));
console.log("Resultado - ", calculate.subtract(2, 2));
console.log("Resultado * ", calculate.multiply(2, 2));
console.log("Resultado / ", calculate.divide(12, 2));