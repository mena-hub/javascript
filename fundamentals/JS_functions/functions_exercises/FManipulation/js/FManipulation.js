function arrayManipulation(arr, command, position, val) {
    if (command === 'remove') {
        if (position === 'end') {
            return arr.pop();
        }
        return arr.shift();
    }
    else if (command === 'add') {
        if (position === 'end') {
            arr.push(val);
            return arr;
        }
        arr.unshift(val)
        return arr;
    }
}

console.log(arrayManipulation([1, 2, 3], "remove", "end"));
console.log(arrayManipulation([1, 2, 3], "remove", "beginning"));
console.log(arrayManipulation([1, 2, 3], "add", "beginning", 20));
console.log(arrayManipulation([1, 2, 3], "add", "end", 30));