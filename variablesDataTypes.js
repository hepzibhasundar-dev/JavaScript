/*
JavaScript Variables and Data Types

In JavaScript, variables are used to store data values. 
You can declare a variable using the var, let, or const keywords. 
The choice of keyword depends on the scope and mutability of the variable.    
7 primitives data types in JavaScript:
1. String: Represents textual data, enclosed in single or double quotes.
2. Number: Represents both integer and floating-point numbers.
3. Boolean: Represents a logical entity that can be either true or false.
4. Null: Represents the intentional absence of any object value.
5. Undefined: Represents a variable that has been declared but not assigned a value.
6. Symbol: Represents a unique and immutable identifier, often used for object properties.
7. BigInt: Represents integers with arbitrary precision, allowing for very large numbers.   
*/

//-- Example of variable declaration and data types
let name = "Hepzibha"; // String
let age = 30; // Number
let isStudent = false; // Boolean
let address = null; // Null
let phoneNumber; // Undefined
let uniqueId = Symbol("id"); // Symbol
let bigNumber = BigInt("9007199254740991"); // BigInt  

//--typeof operator to check data types
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof address); // Output: object (null is considered an object in JavaScript)
console.log(typeof phoneNumber); // Output: undefined
console.log(typeof uniqueId); // Output: symbol
console.log(typeof bigNumber); // Output: bigint        
