function countEvensAndOdds(arr) {
    let object = {oddCount: 0, evenCount: 0};

    for (let i=0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) {
            object.evenCount++;
        } else {
            object.oddCount++;
        }
    }
    return object;
}

console.log(countEvensAndOdds([1, 2, 3, 4]));
console.log(countEvensAndOdds([1, 2, 3, 4, 5, 6, 7]));