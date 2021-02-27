function average(arr) {
    let total = 0;
    
    for(let i=0; i<arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

console.log("Promedio", average([1, 2, 3, 4, 5]));
console.log("Promedio", average([1, 2, 3, 4, 5, 6]));
console.log("Promedio", average([10, 20]));