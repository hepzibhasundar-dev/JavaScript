/*
Destructuring extracts values with a concise pattern-matching syntax
Spread(...) expands iterables.
Rest(...) collects remaining items.
These are essential for clean React code and modern JS.
*/

//Array Destructuring
const [a, b, , d] = [1, 2, 3, 4];
console.log(a, b, d);   // 1 2 4

//Swap variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);  // 2 1

//Object destructuring with rename + default
const {name:n, age=0, role="user"} = {name:"Bob", age:28};
console.log(n, age, role);  // "Bob" 28 "user"

//Spread: merge objects
const defaults = {theme:"dark", lang:"en"};
const settings = { ...defaults, lang:"fr"};
console.log(settings);  //{theme:"dark", lang:"fr"}

//Rest in functions
const log = (first, ...rest) => console.log(`First: ${first}, rest:${rest}`);
log(1, 2, 3, 4);  //First:1, rest:2,3,4