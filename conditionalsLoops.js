/*
Control the flow of your program with if/else, switch, ternary, and loops.

Control flow determines which code runs, if/else for branching, 
switch for multi-case matching, ternary for concise inline decisions.
Loops:  for, for...of(arrays), for...in(object keys), while, and forEach
*/

const score = 72;

//if-else
if(score >= 90) console.log("A");
else if(score >= 70) console.log("B");
else console.log("C");

//Ternary
const pass = score >= 50 ? "PASS" : "FAIL";
console.log(pass); // "PASS"

//for loop
for(let i=0; i<3; i++) console.log(i);  // 0,1,2

//for...of(arrays)
const colors = ["red", "green", "blue"];
for(const c of colors) console.log(c);

//for...in (objects)
const cat = {name:"Mochi", age:3};
for(const key in cat) console.log(key, cat[key]);