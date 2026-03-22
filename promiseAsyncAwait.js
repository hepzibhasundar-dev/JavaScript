/*
A promise represents a future value. 
async/await is syntactic sugar that makes async code look synchronous.
Key patterns:  
error handling with try/catch,
promise.all for parallel operations, and 
promise.race for the first to resolve
*/

//Creating a promise
const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

//async/await
async function fetchUser(id) {
    await delay(100); //simulate network
    if(id<=0) throw new Error("Invalid ID");
    return {id, name:"Hepzibha", role:"admin"};
}

//Try/catch for error handling
async function main() {
    try {
        const user = await fetchUser(1);
        console.log(user.name);  //"Hepzibha"
    } catch(err) {
        console.log(err.message);
    }

    //Promise.all - parallel
    const [u1, u2] = await Promise.all([
        fetchUser(1),
        fetchUser(2)
    ]);
    console.log(u1.name, u2.name); //"Hepzibha" "Hepzibha"
}
main();