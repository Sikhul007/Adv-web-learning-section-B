console.log(`hello wolrd`);
var x = 10; // Can be redeclared and reassigned
let y = 20; // Cannot be redeclared but can be reassigned
const z = 30; // Cannot be redeclared or reassigned

x = 15; // Valid
y = 25; // Valid
// z = 35; // Error: Assignment to constant variable
//let y = 35; // Error: Identifier 'y' has already been declared.
