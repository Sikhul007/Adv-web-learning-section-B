class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

let p1 = new Person("Shihab", 25);
console.log(p1.greet()); // "Hello, my name is Shihab."
