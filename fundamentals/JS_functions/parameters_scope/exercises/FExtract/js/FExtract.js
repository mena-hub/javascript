function extractEveryThird(arr) {
    let newArr = [];
    
    for (let i=2; i<arr.length; i+=3) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(extractEveryThird([1, 2, 3]));
console.log(extractEveryThird([1, 2, 3, 4, 5, 6]));
console.log(extractEveryThird(["a", "b", "c", "d"]));
console.log(extractEveryThird(["first value", "second value", "third value"]));