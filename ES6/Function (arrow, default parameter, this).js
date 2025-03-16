// arrow function
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 3)); // 8

const sub = (a, b) => {
  return a - b;
};
console.log(sub(5, 3)); // 2

// default parameter
const greet = (name = "Guest") => {
  `Hello, ${name}!`;
};
console.log(greet()); // "Hello, Guest!"
console.log(greet("Shihab")); // "Hello, Shihab!"

// this
const obj = {
  name: "Shihab",
  showName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

obj.showName(); // "Shihab"
