function makeXOGrid(rows, columns) {
    let arr = [];
    let startWithX = true;
    for(let i=0; i<rows; i++) {
        let newLine = [];
        for (let j=0; j<columns; j++) {
            if (startWithX) {
                newLine.push("X");
            }
            else {
                newLine.push("O");
            }
            startWithX = !startWithX
        }
        arr.push(newLine);
    }
    return arr;
}

console.log(makeXOGrid(1, 4));
console.log(makeXOGrid(3, 2));
console.log(makeXOGrid(3, 3));