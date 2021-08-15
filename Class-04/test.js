let array = [[1], [2, 1, 1], [3, 4]];

let newArray = array
  .map(arr => arr.reduce((sum, item) => sum += item, 0));

console.log(newArray);