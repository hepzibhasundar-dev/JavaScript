/*
Functions can be declared, expressed, or written as compact arrow functions.  
Key concepts:  default parameters, rest parameters(...args), 
first-class functions (can be passed around), 
and higher-order functions(take or return functions)
*/

//Declaration
function add(a, b) {return a + b;}

//Arrow function
const multiply = (a, b) => a * b;

// Default parameters
const great = (name = "World") => `Hello, ${name}!`;

//Rest parameters
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

//Higher-order function
const applyTwice = (fn, val) => fn(fn(val));

console.log(add(3, 4));   //7
console.log(multiply(3, 4)); //12
console.log(great());   // "Hello World!"
console.log(great("Hepzibha")); // "Hello Hepzibha"
console.log(sum(1,2,3,4,5));  // 15
console.log(applyTwice(x => x*2, 3));  // 12
