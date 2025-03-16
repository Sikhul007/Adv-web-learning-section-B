// Array Destructuring
const car = ["2021", "Toyota", "red"];
const [suv, sedan] = car; // here every index follow the car every index in one by one.
console.log(suv, sedan); //2021 Toyota

// Object Destructuring
const user = { name: "Shihab", age: 25, email: "shihab.gmail.com" };
const { name, age } = user;
console.log(name, age); // Shihab, 25
