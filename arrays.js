/*
Arrays in JavaScript are used to store multiple values in a single variable. They can hold any type of data, including numbers, strings, objects, and even other arrays. Arrays are dynamic, meaning they can grow and shrink in size as needed.
1. Creating an Array:
   - You can create an array using square brackets [] or the Array constructor. 
2. Accessing Array Elements:
   - Array elements are accessed using their index, which starts at 0. 
3. Array Methods:
    - push(): Adds one or more elements to the end of an array. 
    - pop(): Removes the last element from an array and returns it.
    - shift(): Removes the first element from an array and returns it.
    - unshift(): Adds one or more elements to the beginning of an array.
    - splice(): Adds or removes elements from an array at a specified index.
    - slice(): Returns a shallow copy of a portion of an array into a new array.
    - indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.        
    - forEach(): Executes a provided function once for each array element.
    - map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
    - filter(): Creates a new array with all elements that pass the test implemented by the provided function.  
    - reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
    - find(): Returns the value of the first element in the array that satisfies the provided testing function. 
    - findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.    
    - includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    - length: A property that returns the number of elements in an array.    
    - concat(): Used to merge two or more arrays into a new array.  
    - join(): Joins all elements of an array into a string and returns this string.
    - reverse(): Reverses the order of the elements in an array in place.  
    - sort(): Sorts the elements of an array in place and returns the sorted array.  
    - toString(): Returns a string representing the specified array and its elements.  
    - valueOf(): Returns the primitive value of the specified array.   
*/
//-- Example of creating and manipulating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]   
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
fruits.unshift("Elderberry");
console.log(fruits); // Output: ["Elderberry", "Apple", "Banana", "Cherry"]
fruits.shift();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
let citrus = ["Lemon", "Lime"];
let allFruits = fruits.concat(citrus);
console.log(allFruits); // Output: ["Apple", "Banana", "Cherry", "Lemon", "Lime"]
let fruitString = allFruits.join(", ");
console.log(fruitString); // Output: "Apple, Banana, Cherry, Lemon, Lime"   
let sortedFruits = allFruits.sort();
console.log(sortedFruits); // Output: ["Apple", "Banana", "Cherry", "Lemon", "Lime"]    
let reversedFruits = allFruits.reverse();
console.log(reversedFruits); // Output: ["Lime", "Lemon", "Cherry", "Banana", "Apple"]  

const nums = [1, 2, 3, 4, 5];
const squared = nums.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]  
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 

//Add /Remove
nums.push(6); // Add 6 to the end of the array
console.log(nums); // Output: [1, 2, 3, 4, 5, 6]
nums.pop(); // Remove the last element (6)
console.log(nums); // Output: [1, 2, 3, 4, 5]
nums.unshift(0); // Add 0 to the beginning of the array
console.log(nums); // Output: [0, 1, 2, 3, 4, 5]
nums.shift(); // Remove the first element (0)
console.log(nums); // Output: [1, 2, 3, 4, 5]   

//Transform: map, filter, reduce
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
const evenNumbersOnly = numbers.filter(num => num % 2 === 0);
console.log(evenNumbersOnly); // Output: [2, 4]
const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfNumbers); // Output: 15    

//Searching: find, findIndex, includes
const fruitsList = ["Apple", "Banana", "Cherry", "Date"];
const foundFruit = fruitsList.find(fruit => fruit.startsWith("B"));
console.log(foundFruit); // Output: "Banana"
const foundIndex = fruitsList.findIndex(fruit => fruit.startsWith("C"));
console.log(foundIndex); // Output: 2
const hasDate = fruitsList.includes("Date");
console.log(hasDate); // Output: true   

//Aggregation: reduce
const values = [10, 20, 30, 40];
const total = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // Output: 100  

//Length and Access
const colors = ["Red", "Green", "Blue"];
console.log(colors.length); // Output: 3
console.log(colors[0]); // Output: "Red"
console.log(colors[1]); // Output: "Green"
console.log(colors[2]); // Output: "Blue"   

//Sorting and Reversing
const unsortedNumbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]
const reversedNumbers = sortedNumbers.reverse();
console.log(reversedNumbers); // Output: [9, 6, 5, 5, 2, 1] 

//String Representation
const animals = ["Dog", "Cat", "Elephant"];
console.log(animals.toString()); // Output: "Dog,Cat,Elephant"
console.log(animals.valueOf()); // Output: ["Dog", "Cat", "Elephant"]   

//Multidimensional Arrays
const matrix = [
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][1]); // Output: 5
console.log(matrix[2][2]); // Output: 9 

//Array Destructuring
const [first, second, third] = colors;
console.log(first); // Output: "Red"
console.log(second); // Output: "Green"
console.log(third); // Output: "Blue"   

//Spread Operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]   

//Array.from() and Array.of()
const arrayFromString = Array.from("Hello");
console.log(arrayFromString); // Output: ["H", "e", "l", "l", "o"]
const arrayOfNumbers = Array.of(1, 2, 3);
console.log(arrayOfNumbers); // Output: [1, 2, 3]   

//Array.isArray()
console.log(Array.isArray(colors)); // Output: true
console.log(Array.isArray("Not an array")); // Output: false    

//Array Iteration
colors.forEach(color => console.log(color)); // Output: "Red", "Green", "Blue"  

//Array Copying
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]  

//Array Flattening
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]  

//Array Filling
const filledArray = new Array(5).fill(0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]    

//Array.from() with mapping function
const arrayFromSet = Array.from(new Set([1, 2, 3, 4, 5]), x => x * 2);
console.log(arrayFromSet); // Output: [2, 4, 6, 8, 10]  

//Array.prototype.flatMap()
const flatMappedArray = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log(flatMappedArray); // Output: [1, 2, 2, 4, 3, 6] 

//Array.prototype.at()
const sampleArray = ['a', 'b', 'c', 'd', 'e'];
console.log(sampleArray.at(0)); // Output: 'a'
console.log(sampleArray.at(-1)); // Output: 'e'

//Array.prototype.flat()
const deeplyNestedArray = [1, [2, [3, [4, 5]]]];
const flattenedOnce = deeplyNestedArray.flat();
console.log(flattenedOnce); // Output: [1, 2, [3, [4, 5]]]
const fullyFlattened = deeplyNestedArray.flat(Infinity);
console.log(fullyFlattened); // Output: [1, 2, 3, 4, 5] 

//Array.prototype.sort() with custom comparator
const unsortedStrings = ['banana', 'apple', 'cherry'];
const sortedStrings = unsortedStrings.sort((a, b) => a.localeCompare(b));
console.log(sortedStrings); // Output: ['apple', 'banana', 'cherry']    

//Array.prototype.reduce() for counting occurrences
const fruitsArray = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const fruitCount = fruitsArray.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitCount); // Output: { apple: 3, banana: 2, cherry: 1 }  

//Array.prototype.some() and Array.prototype.every()
const numbersArray = [1, 2, 3, 4, 5];
const hasEvenNumber = numbersArray.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Output: true
const allPositive = numbersArray.every(num => num > 0);
console.log(allPositive); // Output: true   

//Array.prototype.find() with objects
const users1 = [
    { id: 1, name: 'Alice' },   
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
const user = users1.find(u => u.id === 2);
console.log(user); // Output: { id: 2, name: 'Bob' }    

//Array.prototype.findIndex() with objects
const userIndex = users1.findIndex(u => u.name === 'Charlie');
console.log(userIndex); // Output: 2    

//Array.prototype.includes() with objects (note: includes checks for reference equality)
const userToCheck = { id: 1, name: 'Alice' };
const includesUser = users1.includes(userToCheck);
console.log(includesUser); // Output: false (because it's a different object reference) 
const existingUser = users1.find(u => u.id === 1);
const includesExistingUser = users1.includes(existingUser);
console.log(includesExistingUser); // Output: true (because it's the same object reference)

//Array.prototype.copyWithin()
const copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3);
console.log(copyWithinArray); // Output: [4, 5, 3, 4, 5]    

//Array.prototype.fill() with start and end parameters
const fillArray = new Array(5).fill(0, 1, 4);
console.log(fillArray); // Output: [0, 0, 0, 0, 0] (only indices 1 to 3 are filled with 0)

//Array.prototype.flat() with depth parameter
const multiLevelNestedArray = [1, [2, [3, [4, 5]]]];
const flattenedToOneLevel = multiLevelNestedArray.flat(1);
console.log(flattenedToOneLevel); // Output: [1, 2, [3, [4, 5]]]
const flattenedToTwoLevels = multiLevelNestedArray.flat(2);
console.log(flattenedToTwoLevels); // Output: [1, 2, 3, [4, 5]] 

//Array.prototype.flatMap() with nested arrays
const nestedNumbers = [1, 2, 3];
const flatMappedNestedNumbers = nestedNumbers.flatMap(num => [num, [num * 2]]);
console.log(flatMappedNestedNumbers); // Output: [1, [2], 2, [4], 3, [6]]   

//Array.prototype.sort() with numbers
const unsortedNumbersArray = [10, 2, 5, 1, 9];
const sortedNumbersArray = unsortedNumbersArray.sort((a, b) => a - b);
console.log(sortedNumbersArray); // Output: [1, 2, 5, 9, 10]    

//Array.prototype.sort() with strings (case-insensitive)
const unsortedStringsArray = ['banana', 'Apple', 'cherry'];
const sortedStringsArray = unsortedStringsArray.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(sortedStringsArray); // Output: ['Apple', 'banana', 'cherry']   

//Array.prototype.reduce() for grouping objects by a property
const people = [
    { name: 'Alice', age: 30 }, 
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 25 }
];  

const groupedByAge1 = people.reduce((acc, person) => {
    const ageGroup = person.age;    
    if (!acc[ageGroup]) {
        acc[ageGroup] = [];
    }
    acc[ageGroup].push(person);
    return acc;
}, {});
console.log(groupedByAge1); 
// Output: { 
//   '25': [ { name: 'Bob', age: 25 }, { name: 'David', age: 25 } ], 
//   '30': [ { name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 } ] 
// }        

//Array.prototype.some() with objects
const hasPersonOver30 = people.some(person => person.age > 30);
console.log(hasPersonOver30); // Output: false
const hasPersonUnder30 = people.some(person => person.age < 30);
console.log(hasPersonUnder30); // Output: true  

//Array.prototype.every() with objects
const allPeopleOver20 = people.every(person => person.age > 20);
console.log(allPeopleOver20); // Output: true
const allPeopleOver25 = people.every(person => person.age > 25);
console.log(allPeopleOver25); // Output: false  

//Array.prototype.find() with nested arrays
const nestedUsers1 = [
    { id: 1, name: 'Alice', hobbies: ['Reading', 'Hiking'] },   
    { id: 2, name: 'Bob', hobbies: ['Cooking', 'Gaming'] },
    { id: 3, name: 'Charlie', hobbies: ['Swimming', 'Traveling'] }
];
const userWithHobby = nestedUsers1.find(user => user.hobbies.includes('Gaming'));
console.log(userWithHobby); // Output: { id: 2, name: 'Bob', hobbies: ['Cooking', 'Gaming'] }   

//Array.prototype.findIndex() with nested arrays
const userIndexWithHobby = nestedUsers1.findIndex(user => user.hobbies.includes('Hiking'));
console.log(userIndexWithHobby); // Output: 0 (index of Alice)  

//Array.prototype.includes() with nested arrays
const hasUserWithHobby1 = nestedUsers1.some(user => user.hobbies.includes('Swimming'));
console.log(hasUserWithHobby1); // Output: true (because Charlie has 'Swimming' as a hobby)  

//Array.prototype.copyWithin() with overlapping regions
const copyWithinOverlapArray = [1, 2, 3, 4, 5];
copyWithinOverlapArray.copyWithin(1, 0, 3);
console.log(copyWithinOverlapArray); // Output: [1, 1, 2, 3, 5] (elements at indices 0 to 2 are copied to index 1)  

//Array.prototype.fill() with objects
const fillWithObjectsArray = new Array(3).fill({ name: 'Default' });
console.log(fillWithObjectsArray); 
// Output: [ { name: 'Default' }, { name: 'Default' }, { name: 'Default' } ] (all elements reference the same object)   
fillWithObjectsArray[0].name = 'Changed';
console.log(fillWithObjectsArray); 
// Output: [ { name: 'Changed' }, { name: 'Changed' }, { name: 'Changed' } ] (all elements reflect the change because they reference the same object)   

//Array.prototype.flat() with sparse arrays
const sparseArray = [1, , 3, , 5];
const flattenedSparseArray = sparseArray.flat();
console.log(flattenedSparseArray); // Output: [1, 3, 5] (empty slots are removed)   

//Array.prototype.flatMap() with sparse arrays
const flatMappedSparseArray = sparseArray.flatMap(x => x ? [x, x * 2] : []);
console.log(flatMappedSparseArray); // Output: [1, 2, 3, 6, 5, 10] (empty slots are ignored)    

//Array.prototype.sort() with mixed types
const mixedArray = [3, 'banana', 1, 'apple', 2];
const sortedMixedArray = mixedArray.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b; // Sort numbers in ascending order    
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b); // Sort strings in alphabetical order
    } else {
        return typeof a === 'number' ? -1 : 1; // Numbers come before strings
    }   
});
console.log(sortedMixedArray); // Output: [1, 2, 3, 'apple', 'banana'] (numbers are sorted before strings)  

//Array.prototype.reduce() for flattening arrays
const arraysToFlatten = [[1, 2], [3, 4], [5, 6]];
const flattenedArrayUsingReduce = arraysToFlatten.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArrayUsingReduce); // Output: [1, 2, 3, 4, 5, 6]   

//Array.prototype.reduce() for creating a lookup object
const items = [
    { id: 1, name: 'Item 1' },  
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];  
const lookup = items.reduce((acc, item) => {
    acc[item.id] = item.name;
    return acc;
}, {});
console.log(lookup); // Output: { '1': 'Item 1', '2': 'Item 2', '3': 'Item 3' } 

//Array.prototype.some() with nested arrays
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const hasArrayWithEvenNumber = nestedArrays.some(arr => arr.some(num => num % 2 === 0));
console.log(hasArrayWithEvenNumber); // Output: true (because all inner arrays contain even numbers)    

//Array.prototype.every() with nested arrays
const allArraysHaveEvenNumbers = nestedArrays.every(arr => arr.every(num => num % 2 === 0));
console.log(allArraysHaveEvenNumbers); // Output: true (because all inner arrays contain only even numbers) 

//Array.prototype.find() with nested arrays
const arrayWithEvenNumber = nestedArrays.find(arr => arr.some(num => num % 2 === 0));
console.log(arrayWithEvenNumber); // Output: [1, 2] (the first inner array that contains an even number)    

//Array.prototype.findIndex() with nested arrays
const indexOfArrayWithEvenNumber = nestedArrays.findIndex(arr => arr.some(num => num % 2 === 0));
console.log(indexOfArrayWithEvenNumber); // Output: 0 (the index of the first inner array that contains an even number) 

//Array.prototype.includes() with nested arrays
const hasArrayWithNumberGreaterThan5 = nestedArrays.some(arr => arr.includes(6));
console.log(hasArrayWithNumberGreaterThan5); // Output: true (because the last inner array includes the number 6)   

//Array.prototype.copyWithin() with non-overlapping regions
const copyWithinNonOverlapArray = [1, 2, 3, 4, 5];
copyWithinNonOverlapArray.copyWithin(0, 3);
console.log(copyWithinNonOverlapArray); // Output: [4, 5, 3, 4, 5] (elements at indices 3 and 4 are copied to index 0 and 1)    

//Array.prototype.fill() with different values
const fillWithDifferentValuesArray = new Array(5).fill(0).map((_, index) => index + 1);
console.log(fillWithDifferentValuesArray); // Output: [1, 2, 3, 4, 5] (each element is filled with its index + 1)   

//Array.prototype.flat() with empty arrays
const arrayWithEmptyArrays = [1, [], 3, [], 5];
const flattenedArrayWithEmptyArrays = arrayWithEmptyArrays.flat();
console.log(flattenedArrayWithEmptyArrays); // Output: [1, 3, 5] (empty arrays are removed)

//Array.prototype.flatMap() with empty arrays
const flatMappedArrayWithEmptyArrays = arrayWithEmptyArrays.flatMap(x => x.length ? x : []);
console.log(flatMappedArrayWithEmptyArrays); // Output: [1, 3, 5] (empty arrays are ignored)

//Array.prototype.sort() with undefined values
const arrayWithUndefined = [3, undefined, 1, undefined, 2];
const sortedArrayWithUndefined = arrayWithUndefined.sort((a, b) => {
    if (a === undefined) return 1;
    if (b === undefined) return -1;
    return a - b;
});
console.log(sortedArrayWithUndefined); // Output: [1, 2, 3, undefined, undefined] (undefined values are placed at the end)

//Array.prototype.reduce() for finding the maximum value
const numbersForMax = [10, 5, 20, 15];
const maxValue = numbersForMax.reduce((max, current) => (current > max ? current : max), -Infinity);
console.log(maxValue); // Output: 20 (the maximum value in the array)   

//Array.prototype.reduce() for finding the minimum value
const numbersForMin = [10, 5, 20, 15];
const minValue = numbersForMin.reduce((min, current) => (current < min ? current : min), Infinity);
console.log(minValue); // Output: 5 (the minimum value in the array)

//Array.prototype.some() with empty arrays
const emptyArray = [];
const hasSomeElement = emptyArray.some(() => true);
console.log(hasSomeElement); // Output: false (because the array is empty)

//Array.prototype.every() with empty arrays
const allElementsSatisfyCondition = emptyArray.every(() => false);
console.log(allElementsSatisfyCondition); // Output: true (because the array is empty, every element (none) satisfies the condition)    

//Array.prototype.find() with empty arrays
const foundElementInEmptyArray = emptyArray.find(() => true);
console.log(foundElementInEmptyArray); // Output: undefined (because the array is empty)

//Array.prototype.findIndex() with empty arrays
const foundIndexInEmptyArray = emptyArray.findIndex(() => true);
console.log(foundIndexInEmptyArray); // Output: -1 (because the array is empty)

//Array.prototype.includes() with empty arrays
const includesElementInEmptyArray = emptyArray.includes(1);
console.log(includesElementInEmptyArray); // Output: false (because the array is empty)

//Array.prototype.copyWithin() with empty arrays
const copyWithinEmptyArray = [];
copyWithinEmptyArray.copyWithin(0, 1);
console.log(copyWithinEmptyArray); // Output: [] (copying within an empty array has no effect)  

//Array.prototype.fill() with empty arrays
const fillEmptyArray = [];
fillEmptyArray.fill(0);
console.log(fillEmptyArray); // Output: [] (filling an empty array has no effect)   

//Array.prototype.flat() with empty arrays
const flatEmptyArray = [];
const flattenedEmptyArray = flatEmptyArray.flat();
console.log(flattenedEmptyArray); // Output: [] (flattening an empty array results in an empty array)       

//Array.prototype.flatMap() with empty arrays
const flatMapEmptyArray = [];
const flatMappedEmptyArray = flatMapEmptyArray.flatMap(() => []);
console.log(flatMappedEmptyArray); // Output: [] (flat mapping an empty array results in an empty array)    

//Array.prototype.sort() with empty arrays
const sortEmptyArray = [];
const sortedEmptyArray = sortEmptyArray.sort();
console.log(sortedEmptyArray); // Output: [] (sorting an empty array results in an empty array) 

//Array.prototype.reduce() with empty arrays
const reduceEmptyArray = [];
const reducedEmptyArray = reduceEmptyArray.reduce((acc, curr) => acc + curr, 0);
console.log(reducedEmptyArray); // Output: 0 (reducing an empty array with an initial value results in the initial value)   

//Array.prototype.some() with all elements satisfying condition
const allTrueArray = [true, true, true];
const hasSomeFalse = allTrueArray.some(value => value === false);
console.log(hasSomeFalse); // Output: false (because all elements are true)
const hasSomeTrue = allTrueArray.some(value => value === true);
console.log(hasSomeTrue); // Output: true (because all elements are true)

//Array.prototype.every() with all elements satisfying condition
const allTrueEveryArray = [true, true, true];
const allSatisfyTrue = allTrueEveryArray.every(value => value === true);
console.log(allSatisfyTrue); // Output: true (because all elements are true)
const allSatisfyFalse = allTrueEveryArray.every(value => value === false);
console.log(allSatisfyFalse); // Output: false (because all elements are true)  

//Array.prototype.find() with all elements satisfying condition
const allTrueFindArray = [true, true, true];
const foundTrue = allTrueFindArray.find(value => value === true);
console.log(foundTrue); // Output: true (the first element that satisfies the condition is true)
const foundFalse = allTrueFindArray.find(value => value === false);
console.log(foundFalse); // Output: undefined (no element satisfies the condition)  

//Array.prototype.findIndex() with all elements satisfying condition
const allTrueFindIndexArray = [true, true, true];
const foundTrueIndex = allTrueFindIndexArray.findIndex(value => value === true);
console.log(foundTrueIndex); // Output: 0 (the index of the first element that satisfies the condition is 0)
const foundFalseIndex = allTrueFindIndexArray.findIndex(value => value === false);
console.log(foundFalseIndex); // Output: -1 (no element satisfies the condition)    

//Array.prototype.includes() with all elements satisfying condition
const allTrueIncludesArray = [true, true, true];
const includesTrue = allTrueIncludesArray.includes(true);
console.log(includesTrue); // Output: true (because all elements are true)
const includesFalse = allTrueIncludesArray.includes(false);
console.log(includesFalse); // Output: false (because no element is false)  

//Array.prototype.copyWithin() with all elements the same
const copyWithinSameArray = [1, 1, 1, 1, 1];
copyWithinSameArray.copyWithin(0, 2);
console.log(copyWithinSameArray); // Output: [1, 1, 1, 1, 1] (copying within an array of identical elements has no visible effect)  

//Array.prototype.fill() with all elements the same
const fillSameArray = new Array(5).fill(1);
console.log(fillSameArray); // Output: [1, 1, 1, 1, 1] (filling an array with the same value results in an array of identical elements) 

//Array.prototype.flat() with all elements the same
const flatSameArray = [[1, 1], [1, 1], [1, 1]];
const flattenedSameArray = flatSameArray.flat();
console.log(flattenedSameArray); // Output: [1, 1, 1, 1, 1, 1] (flattening an array of identical elements results in an array of identical elements)    

//Array.prototype.flatMap() with all elements the same
const flatMapSameArray = [[1, 1], [1, 1], [1, 1]];
const flatMappedSameArray = flatMapSameArray.flatMap(x => x);
console.log(flatMappedSameArray); // Output: [1, 1, 1, 1, 1, 1] (flat mapping an array of identical elements results in an array of identical elements) 

//Array.prototype.sort() with all elements the same
const sortSameArray = [1, 1, 1, 1, 1];
const sortedSameArray = sortSameArray.sort();
console.log(sortedSameArray); // Output: [1, 1, 1, 1, 1] (sorting an array of identical elements results in the same array) 

//Array.prototype.reduce() with all elements the same
const reduceSameArray = [1, 1, 1, 1, 1];
const reducedSameArray = reduceSameArray.reduce((acc, curr) => acc + curr, 0);
console.log(reducedSameArray); // Output: 5 (the sum of all elements in the array)

//Array.prototype.some() with all elements falsy
const allFalseArray = [0, false, '', null, undefined];
const hasSomeTruthy = allFalseArray.some(value => Boolean(value));
console.log(hasSomeTruthy); // Output: false (because all elements are falsy)   
const hasSomeFalsy = allFalseArray.some(value => !Boolean(value));
console.log(hasSomeFalsy); // Output: true (because all elements are falsy)

//Array.prototype.every() with all elements falsy
const allFalseEveryArray = [0, false, '', null, undefined];
const allSatisfyTruthy = allFalseEveryArray.every(value => Boolean(value));
console.log(allSatisfyTruthy); // Output: false (because all elements are falsy)
const allSatisfyFalsy = allFalseEveryArray.every(value => !Boolean(value));
console.log(allSatisfyFalsy); // Output: true (because all elements are falsy)  

//Array.prototype.find() with all elements falsy
const allFalseFindArray = [0, false, '', null, undefined];
const foundTruthy = allFalseFindArray.find(value => Boolean(value));
console.log(foundTruthy); // Output: undefined (no element satisfies the condition)
const foundFalsy = allFalseFindArray.find(value => !Boolean(value));
console.log(foundFalsy); // Output: 0 (the first element that satisfies the condition is 0) 

//Array.prototype.findIndex() with all elements falsy
const allFalseFindIndexArray = [0, false, '', null, undefined];
const foundTruthyIndex = allFalseFindIndexArray.findIndex(value => Boolean(value));
console.log(foundTruthyIndex); // Output: -1 (no element satisfies the condition)
const foundFalsyIndex = allFalseFindIndexArray.findIndex(value => !Boolean(value));
console.log(foundFalsyIndex); // Output: 0 (the index of the first element that satisfies the condition is 0)   

//Array.prototype.includes() with all elements falsy
const allFalseIncludesArray = [0, false, '', null, undefined];
const includesTruthy = allFalseIncludesArray.includes(true);
console.log(includesTruthy); // Output: false (because no element is true)
const includesFalsy = allFalseIncludesArray.includes(0);
console.log(includesFalsy); // Output: true (because 0 is included in the array)    

//Array.prototype.copyWithin() with all elements falsy
const copyWithinFalseArray = [0, false, '', null, undefined];
copyWithinFalseArray.copyWithin(0, 2);
console.log(copyWithinFalseArray); // Output: ['', null, undefined, null, undefined] (elements at indices 2 to 4 are copied to index 0 to 2)    

//Array.prototype.fill() with all elements falsy
const fillFalseArray = new Array(5).fill(false);
console.log(fillFalseArray); // Output: [false, false, false, false, false] (filling an array with false results in an array of false values)   

//Array.prototype.flat() with all elements falsy
const flatFalseArray = [[0, false], ['', null], [undefined]];
const flattenedFalseArray = flatFalseArray.flat();
console.log(flattenedFalseArray); // Output: [0, false, '', null, undefined] (flattening an array of falsy values results in an array of falsy values)  

//Array.prototype.flatMap() with all elements falsy
const flatMapFalseArray = [[0, false], ['', null], [undefined]];
const flatMappedFalseArray = flatMapFalseArray.flatMap(x => x);
console.log(flatMappedFalseArray); // Output: [0, false, '', null, undefined] (flat mapping an array of falsy values results in an array of falsy values)   

//Array.prototype.sort() with all elements falsy
const sortFalseArray = [0, false, '', null, undefined];
const sortedFalseArray = sortFalseArray.sort();
console.log(sortedFalseArray); // Output: [0, '', false, null, undefined] (sorting an array of falsy values results in a specific order based on their string representation)   

//Array.prototype.reduce() with all elements falsy
const reduceFalseArray = [0, false, '', null, undefined];
const reducedFalseArray = reduceFalseArray.reduce((acc, curr) => acc + String(curr), '');
console.log(reducedFalseArray); // Output: "0falsenullundefined" (the string concatenation of all elements in the array)    

//Array.prototype.some() with all elements truthy
const allTruthyArray = [1, 'hello', true, {}, []];
const hasSomeFalsy1 = allTruthyArray.some(value => !Boolean(value));
console.log(hasSomeFalsy1); // Output: false (because all elements are truthy)
const hasSomeTruthy1 = allTruthyArray.some(value => Boolean(value));
console.log(hasSomeTruthy1); // Output: true (because all elements are truthy)   

//Array.prototype.every() with all elements truthy
const allTruthyEveryArray = [1, 'hello', true, {}, []];
const allSatisfyTruthy1 = allTruthyEveryArray.every(value => Boolean(value));
console.log(allSatisfyTruthy1); // Output: true (because all elements are truthy)
const allSatisfyFalsy1 = allTruthyEveryArray.every(value => !Boolean(value));
console.log(allSatisfyFalsy1); // Output: false (because all elements are truthy)   
//Array.prototype.find() with all elements truthy
const allTruthyFindArray = [1, 'hello', true, {}, []];
const foundTruthy1 = allTruthyFindArray.find(value => Boolean(value));
console.log(foundTruthy1); // Output: 1 (the first element that satisfies the condition is 1)
const foundFalsy1 = allTruthyFindArray.find(value => !Boolean(value));
console.log(foundFalsy1); // Output: undefined (no element satisfies the condition)     
//Array.prototype.findIndex() with all elements truthy
const allTruthyFindIndexArray = [1, 'hello', true, {}, []];
const foundTruthyIndex1 = allTruthyFindIndexArray.findIndex(value => Boolean(value));
console.log(foundTruthyIndex1); // Output: 0 (the index of the first element that satisfies the condition is 0)
const foundFalsyIndex1 = allTruthyFindIndexArray.findIndex(value => !Boolean(value));
console.log(foundFalsyIndex1); // Output: -1 (no element satisfies the condition)    
//Array.prototype.includes() with all elements truthy
const allTruthyIncludesArray = [1, 'hello', true, {}, []];
const includesTruthy1 = allTruthyIncludesArray.includes(1);
console.log(includesTruthy1); // Output: true (because 1 is included in the array)
const includesFalsy1 = allTruthyIncludesArray.includes(0);
console.log(includesFalsy1); // Output: false (because 0 is not included in the array)
//Array.prototype.copyWithin() with all elements truthy
const copyWithinTruthyArray = [1, 'hello', true, {}, []];
copyWithinTruthyArray.copyWithin(0, 2);
console.log(copyWithinTruthyArray); // Output: [true, {}, [], {}, []] (elements at indices 2 to 4 are copied to index 0 to 2)
//Array.prototype.fill() with all elements truthy
const fillTruthyArray = new Array(5).fill(true);        
console.log(fillTruthyArray); // Output: [true, true, true, true, true] (filling an array with true results in an array of true values)
//Array.prototype.flat() with all elements truthy
const flatTruthyArray = [[1, 'hello'], [true, {}], [[]]];   
const flattenedTruthyArray = flatTruthyArray.flat();
console.log(flattenedTruthyArray); // Output: [1, 'hello', true, {}, []] (flattening an array of truthy values results in an array of truthy values)
//Array.prototype.flatMap() with all elements truthy
const flatMapTruthyArray = [[1, 'hello'], [true, {}], [[]]];    
const flatMappedTruthyArray = flatMapTruthyArray.flatMap(x => x);
console.log(flatMappedTruthyArray); // Output: [1, 'hello', true, {}, []] (flat mapping an array of truthy values results in an array of truthy values) 
//Array.prototype.sort() with all elements truthy
const sortTruthyArray = [1, 'hello', true, {}, []];
const sortedTruthyArray = sortTruthyArray.sort();
console.log(sortedTruthyArray); // Output: [1, 'hello', true, {}, []] (sorting an array of truthy values results in a specific order based on their string representation)
//Array.prototype.reduce() with all elements truthy
const reduceTruthyArray = [1, 'hello', true, {}, []];
const reducedTruthyArray = reduceTruthyArray.reduce((acc, curr) => acc + String(curr), '');
console.log(reducedTruthyArray); // Output: "1hellotrue[object Object]" (the string concatenation of all elements in the array)     

//Array.prototype.reduce() for counting occurrences of a specific value
const valuesToCount = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const countOfApple = valuesToCount.reduce((count, value) => value === 'apple' ? count + 1 : count, 0);
console.log(countOfApple); // Output: 3 (the number of occurrences of 'apple' in the array) 

//Array.prototype.reduce() for creating a frequency map
const frequencyMap = valuesToCount.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
}, {}); 
console.log(frequencyMap); // Output: { apple: 3, banana: 2, cherry: 1 } (a frequency map of the values in the array)   

//Array.prototype.reduce() for finding the longest string
const stringsToCheck = ['short', 'medium', 'longest', 'tiny'];
const longestString = stringsToCheck.reduce((longest, current) => current.length > longest.length ? current : longest, '');
console.log(longestString); // Output: "longest" (the longest string in the array)  
//Array.prototype.reduce() for flattening an array of arrays
const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
const flattenedArray1 = arrayOfArrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6] (the flattened array)    

//Array.prototype.reduce() for calculating the product of numbers
const numbersToMultiply = [1, 2, 3, 4];
const product = numbersToMultiply.reduce((acc, curr) => acc * curr, 1);
console.log(product); // Output: 24 (the product of all numbers in the array)   

//Array.prototype.reduce() for grouping objects by a property
const peopleToGroup = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 }
];
const groupedByAge = peopleToGroup.reduce((acc, person) => {
    acc[person.age] = acc[person.age] || [];
    acc[person.age].push(person);
    return acc;
}, {});
console.log(groupedByAge); // Output: { 30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }], 25: [{ name: 'Bob', age: 25 }] } (grouped by age)   

//Array.prototype.reduce() for creating a lookup object
const itemsToLookup = [
    { id: 1, name: 'Item 1' },  
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];
const lookupById = itemsToLookup.reduce((acc, item) => {
    acc[item.id] = item.name;
    return acc;
}, {});
console.log(lookupById); // Output: { '1': 'Item 1', '2': 'Item 2', '3': 'Item 3' } (a lookup object by id) 

//Array.prototype.reduce() for finding the maximum value in an array of objects
const products = [
    { name: 'Product A', price: 10 },   
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 15 }
];
const mostExpensiveProduct = products.reduce((max, product) => product.price > max.price ? product : max, products[0]);
console.log(mostExpensiveProduct); // Output: { name: 'Product B', price: 20 } (the most expensive product) 

//Array.prototype.reduce() for finding the minimum value in an array of objects
const leastExpensiveProduct = products.reduce((min, product) => product.price < min.price ? product : min, products[0]);
console.log(leastExpensiveProduct); // Output: { name: 'Product A', price: 10 } (the least expensive product)   

//Array.prototype.reduce() for calculating the average price of products
const averagePrice = products.reduce((acc, product) => acc + product.price, 0) / products.length;
console.log(averagePrice); // Output: 15 (the average price of the products)    

//Array.prototype.reduce() for concatenating strings
const stringsToConcatenate = ['Hello', ' ', 'World', '!'];
const concatenatedString = stringsToConcatenate.reduce((acc, str) => acc + str, '');
console.log(concatenatedString); // Output: "Hello World!" (the concatenated string)    

//Array.prototype.reduce() for counting occurrences of a specific character in strings
const stringsToCount = ['apple', 'banana', 'cherry'];
const countOfA = stringsToCount.reduce((count, str) => count + (str.split('a').length - 1), 0);
console.log(countOfA); // Output: 4 (the total count of the character 'a' in the array of strings)  

//Array.prototype.reduce() for creating a histogram of string lengths
const histogram = stringsToCount.reduce((acc, str) => {
    const length = str.length;  acc[length] = (acc[length] || 0) + 1;   return acc;     
}, {});
console.log(histogram); // Output: { 5: 1, 6: 1, 7: 1 } (a histogram of string lengths) 

//Array.prototype.reduce() for finding the longest word in a sentence
const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, '');
console.log(longestWord); // Output: "jumps" (the longest word in the sentence) 

//Array.prototype.reduce() for calculating the total length of all strings in an array
const totalLength = stringsToCount.reduce((acc, str) => acc + str.length, 0);
console.log(totalLength); // Output: 17 (the total length of all strings in the array)  

//Array.prototype.reduce() for creating a set of unique values
const valuesWithDuplicates = ['apple', 'banana', 'apple', 'cherry', 'banana'];  
const uniqueValues = valuesWithDuplicates.reduce((acc, value) => {
    if (!acc.includes(value)) {
        acc.push(value);
    }   return acc; 
}, []);
console.log(uniqueValues); // Output: ['apple', 'banana', 'cherry'] (an array of unique values) 

//Array.prototype.reduce() for grouping strings by their first letter
const groupedByFirstLetter = stringsToCount.reduce((acc, str) => {
    const firstLetter = str[0];   acc[firstLetter] = acc[firstLetter] || [];    
    acc[firstLetter].push(str);   return acc;
}, {});
console.log(groupedByFirstLetter); // Output: { a: ['apple'], b: ['banana'], c: ['cherry'] } (grouped by first letter)  

//Array.prototype.reduce() for creating a lookup object from an array of objects
const users = [
    { id: 1, name: 'Alice' },   
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];  
const userLookup = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});
console.log(userLookup); // Output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' } (a lookup object by user id)       

//Array.prototype.reduce() for calculating the total price of items in a shopping cart
const shoppingCart = [
    { name: 'Item A', price: 10, quantity: 2 },
    { name: 'Item B', price: 20, quantity: 1 },
    { name: 'Item C', price: 15, quantity: 3 }
];
const totalCartPrice = shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log(totalCartPrice); // Output: 65 (the total price of all items in the shopping cart)      

//Array.prototype.reduce() for finding the most common string in an array
const stringsToAnalyze = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']; 
const mostCommonString = stringsToAnalyze.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1; 
    if (acc[str] > acc.mostCommonCount) {
        acc.mostCommon = str;
        acc.mostCommonCount = acc[str];
    }   return acc; 
}, { mostCommon: null, mostCommonCount: 0 }).mostCommon;
console.log(mostCommonString); // Output: "apple" (the most common string in the array)

//Array.prototype.reduce() for creating a nested object from an array of objects
const nestedObject = users.reduce((acc, user) => {
    acc[user.id] = { name: user.name };
    return acc;
}, {}); 
console.log(nestedObject); // Output: { '1': { name: 'Alice' }, '2': { name: 'Bob' }, '3': { name: 'Charlie' } } (a nested object by user id)   

//Array.prototype.reduce() for calculating the total number of characters in an array of strings
const totalCharacters = stringsToCount.reduce((acc, str) => acc + str.length, 0);
console.log(totalCharacters); // Output: 17 (the total number of characters in all strings in the array)    

//Array.prototype.reduce() for finding the average length of strings in an array
const averageLength = stringsToCount.reduce((acc, str) => acc + str.length, 0) / stringsToCount.length;
console.log(averageLength); // Output: 5.666666666666667 (the average length of the strings in the array)   
//Array.prototype.reduce() for creating a mapping of string lengths to arrays of strings
const lengthMapping = stringsToCount.reduce((acc, str) => {
    const length = str.length;  
    acc[length] = acc[length] || [];    
    acc[length].push(str);   return acc; 
}, {});
console.log(lengthMapping); // Output: { 5: ['apple'], 6: ['banana'], 7: ['cherry'] } (a mapping of string lengths to arrays of strings)    

//Array.prototype.reduce() for finding the longest string in an array of strings
const longestStringInArray = stringsToCount.reduce((longest, current) => current.length > longest.length ? current : longest, '');
console.log(longestStringInArray); // Output: "banana" (the longest string in the array)        

//Array.prototype.reduce() for finding the shortest string in an array of strings
const shortestStringInArray = stringsToCount.reduce((shortest, current) => current.length < shortest.length ? current : shortest, stringsToCount[0]);
console.log(shortestStringInArray); // Output: "apple" (the shortest string in the array)   

//Array.prototype.reduce() for creating a lookup object from an array of objects with nested properties
const nestedUsers = [
    { id: 1, name: 'Alice', hobbies: ['Reading', 'Hiking'] },   
        { id: 2, name: 'Bob', hobbies: ['Cooking', 'Gaming'] },
        { id: 3, name: 'Charlie', hobbies: ['Swimming', 'Drawing'] }
];  
const userHobbyLookup = nestedUsers.reduce((acc, user) => {
    acc[user.id] = user.hobbies;
    return acc;
}, {});
console.log(userHobbyLookup); // Output: { '1': ['Reading', 'Hiking'], '2': ['Cooking', 'Gaming'], '3': ['Swimming', 'Drawing'] } (a lookup object of user hobbies by user id)      

//Array.prototype.some() with nested arrays
const hasUserWithHobby = nestedUsers.some(user => user.hobbies.includes('Swimming'));
console.log(hasUserWithHobby); // Output: true (because Charlie has 'Swimming' as a hobby)

