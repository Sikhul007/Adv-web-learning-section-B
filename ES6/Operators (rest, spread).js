let arr1 = [1, 2, 3];
let arr2 = [8, 9, 10];

// Rest Operator (...)
function sum(...numbers) {
  return numbers;
}
console.log(sum(arr1, arr2)); // [ [ 1, 2, 3 ], [ 8, 9, 10 ] ]

//Spread Operator (...)
let out = [arr1, arr2]; // [ [ 1, 2, 3 ], [ 8, 9, 10 ] ]
let out1 = [...arr1, arr2]; // [ 1, 2, 3, [ 8, 9, 10 ] ]
let out3 = [...arr1, ...arr2]; // [ 1, 2, 3, 8, 9, 10 ]
let out2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
