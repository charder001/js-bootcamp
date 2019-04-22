 let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
var merged = [].concat.apply([], arrays);
console.log(merged);
// → [1, 2, 3, 4, 5, 6]
