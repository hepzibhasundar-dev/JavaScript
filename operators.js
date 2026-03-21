/*
Operators let you compute values, compare values, and perform various operations on data.
1. Arithmetic Operators: +, -, *, /, %, ** (exponentiation)
2. Assignment Operators: =, +=, -=, *=, /=, %=, **=
3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
4. Logical Operators: && (AND), || (OR), ! (NOT)    
*/

//Arithmetic Operators
let a = 10;
let b = 5;
let c = a + b; // Addition
let d = a - b; // Subtraction
let e = a * b; // Multiplication
let f = a / b; // Division
let g = a % b; // Modulus
let h = a ** b; // Exponentiation   
console.log(c); // Output: 15
console.log(d); // Output: 5
console.log(e); // Output: 50
console.log(f); // Output: 2
console.log(g); // Output: 0
console.log(h); // Output: 100000   

//Comparison Operators
console.log(a == b); // Output: false (loose equality)
console.log(a === b); // Output: false (strict equality)
console.log(a != b); // Output: true (loose inequality)
console.log(a !== b); // Output: true (strict inequality)
console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a >= b); // Output: true
console.log(a <= b); // Output: false   

//Logical Operators
let isAdult = true;
let hasPermission = false;
console.log(isAdult && hasPermission); // Output: false (AND)
console.log(isAdult || hasPermission); // Output: true (OR)
console.log(!isAdult); // Output: false (NOT)       

//Nullish Coalescing Operator (??)
let userInput = null;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue;
console.log(result); // Output: "Default Value"
