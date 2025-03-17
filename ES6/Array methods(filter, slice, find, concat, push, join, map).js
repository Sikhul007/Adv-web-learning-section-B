//filter
let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNunber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
  ,
];
const details = students.filter((stu) => {
  return stu.marks > 60;
});
console.log(details);

//slice
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(1, 3)); // [2, 3] .... it will start from nth index and end at (n-1) index

//find
console.log(numbers.find((n) => n > 3)); // 4 .... Finds the first element that meets a condition.

//concat
console.log([1, 2].concat([3, 4])); // [1, 2, 3, 4]

//push
let arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]

//join
console.log(["Hello", "World"].join(" ")); // "Hello World"

//map
console.log(numbers.map((n) => n * 2)); // [2, 4, 6, 8, 10] ..... Transforms each element.
