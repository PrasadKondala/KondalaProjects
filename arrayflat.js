// 3 nested arrays 
let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// reducing nesting by flattening the array to depth 2 
let flattenArray = numbers.flat(2);

// new flatten array
console.log(flattenArray);