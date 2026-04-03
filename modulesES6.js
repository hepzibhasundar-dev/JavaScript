/*
Modern javascript uses ES modules(import/export). 
Named exports let you export multiple things;
default exports export one main thing per file.  
Dynamic imports enable code-splittig for performance.
*/

//math.js - named exports
export const add = (a, b) => a + b;
export const PI = 3.14159;

//user.js - default export
export default class User {
    constructor(name) { this.name = name;}
}

//main.js - importing
import {add, PI} from "./math.js";
import User from "./user.js";
import * as MathUtils from "./math.js";

console.log(add(3, 4));
console.log(PI);
console.log(new User("Bob").name);

//Dynamic import (lazy loading)
const {add:dynamicAdd} = await import("./math.js");
console.log(dynamicAdd(10, 20));