let data = {
  innerData: {
    order: ["uno", "dos", "tres"],
    snacks: ["bizcochitos", "chipa", "papitas"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonacci: [1, 1, 2, 3, 5, 8, 13]
    },
    addSnack: function (snack) {
      this.snacks.push(snack);
      return this;
    }
  }
}

let prime = data.innerData.numberData.primeNumbers;

for (let i = 0; i < prime.length; i++) {
    console.log("Prime", prime[i]);
}

let fibonacci = data.innerData.numberData.fibonacci;

for (let i = 0; i < fibonacci.length; i++) {
    if (fibonacci[i] % 2 === 0) {
        console.log("Even Fibonacci", fibonacci[i]);
    }
}