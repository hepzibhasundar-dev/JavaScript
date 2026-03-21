/*
Scope:
    Variables are accessible within the block (let/const) or function(var)
    they're defined in. 

Closures:
    A function that captures its surrounding scope, even after that scope has finished
    execution.  This enables powerful patters like factories and private state.
*/

//Block scope
{
    let x = 10;
    console.log(x); //10
}
//console.log(x);  -> reference error

//closure: counter factory
function makeCounter() {
    let count = 0; // private variable
    return {
        increment: () => ++count,
        decrement: () => --count,
        value: () => count
    };
}

const c = makeCounter();
c.increment();
console.log(c.value());
c.decrement();
console.log(c.value());
c.increment();
console.log(c.value());
c.decrement();
console.log(c.value()); // 2

//closure in loops (common gotcha)
const fns = [];
for(let i=0; i<3; i++) {
    fns.push(() => i);  //each captures its own i (let)
}
console.log(fns.map(f => f()));  // [0, 1, 2]