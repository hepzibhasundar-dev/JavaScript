/*
Strings can be created using single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
Template literals allow for embedding expressions and multi-line strings using backticks. 
You can include variables and expressions inside a template literal using ${expression} syntax. 
*/
//-- Example of string creation
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, JavaScript!";
let templateLiteralString = `Hello, ${singleQuoteString} and ${doubleQuoteString}!`;
console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(templateLiteralString); // Output: Hello, World! Hello, JavaScript! Hello, Hello, World! and Hello, JavaScript!

//-- String methods
let text = "Hello, JavaScript!";
console.log(text.length); // Output: 15
console.log(text.toUpperCase()); // Output: HELLO, JAVASCRIPT!
console.log(text.toLowerCase()); // Output: hello, javascript!
console.log(text.substring(0, 5)); // Output: Hello     
console.log(text.includes("Java")); // Output: true
console.log(text.replace("JavaScript", "World")); // Output: Hello, World!  

//-- String concatenation
let str1 = "Hello";
let str2 = "World";
let concatenatedString = str1 + ", " + str2 + "!";
console.log(concatenatedString); // Output: Hello, World!   

//-- Template literals with expressions
let a = 5;
let b = 10;
let sumString = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sumString); // Output: The sum of 5 and 10 is 15.   

//-- Multi-line strings using template literals
let multiLineString = `This is a multi-line string.
It can span multiple lines without needing escape characters.
This makes it easier to read and write.`;
console.log(multiLineString);

//-- String interpolation with functions
function greet(name) {
    return `Hello, ${name}!`;
}   
let greeting = greet("Hepzibha");
console.log(greeting); // Output: Hello, Hepzibha!

//-- String trimming
let stringWithWhitespace = "   Hello, World!   ";
console.log(stringWithWhitespace.trim()); // Output: Hello, World!

//-- String splitting
let csv = "John,Doe,30,Engineer";
let csvArray = csv.split(",");
console.log(csvArray); // Output: ["John", "Doe", "30", "Engineer"]

//-- String repetition
let repeatedString = "Hello! ".repeat(3);
console.log(repeatedString); // Output: Hello! Hello! Hello!

//-- String padding
let paddedString = "5".padStart(3, "0");
console.log(paddedString); // Output: 005
let paddedEndString = "5".padEnd(3, "0");
console.log(paddedEndString); // Output: 500

//-- String comparison
let strA = "apple";
let strB = "banana";
console.log(strA.localeCompare(strB)); // Output: -1 (strA comes before strB)
console.log(strB.localeCompare(strA)); // Output: 1 (strB comes after strA)
console.log(strA.localeCompare("apple")); // Output: 0 (strA is equal to "apple")

//-- String searching
let searchString = "The quick brown fox jumps over the lazy dog.";
console.log(searchString.indexOf("fox")); // Output: 16
console.log(searchString.lastIndexOf("the")); // Output: 31
console.log(searchString.search(/fox/)); // Output: 16 (using regular expression)   

//-- String slicing
let slicedString = searchString.slice(4, 9);
console.log(slicedString); // Output: quick 
let negativeSlicedString = searchString.slice(-8, -4);
console.log(negativeSlicedString); // Output: lazy

//-- String normalization
let accentedString = "Café";
let normalizedString = accentedString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
console.log(normalizedString); // Output: Cafe  

//-- String encoding and decoding
let originalString = "Hello, World!";
let encodedString = encodeURIComponent(originalString);
console.log(encodedString); // Output: Hello%2C%20World%21
let decodedString = decodeURIComponent(encodedString);
console.log(decodedString); // Output: Hello, World!    

//-- String immutability
let immutableString = "Hello";
immutableString[0] = "h"; // This does not change the original string
console.log(immutableString); // Output: Hello (the original string remains unchanged)  

//-- String templates with functions
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}
let price = 19.99;
let priceString = `The price is ${formatPrice(price)}.`;
console.log(priceString); // Output: The price is $19.99.   

//-- String literals with expressions
let userName = "Hepzibha";
let welcomeMessage = `Welcome, ${userName}!`;
console.log(welcomeMessage); // Output: Welcome, Hepzibha!

//-- String literals with multi-line expressions
let multiLineExpression = `This is a multi-line string with an expression:
The current date and time is: ${new Date().toLocaleString()}`;
console.log(multiLineExpression);

//-- String literals with nested expressions
let nestedExpression = `The result of 5 + 10 is: ${(() => 5 + 10)()}`;
console.log(nestedExpression); // Output: The result of 5 + 10 is: 15   

//-- String literals with conditional expressions
let isLoggedIn = true;
let conditionalString = `You are ${isLoggedIn ? "logged in" : "logged out"}.`;
console.log(conditionalString); // Output: You are logged in.   

//-- String literals with function calls
function getUserStatus(isOnline) {
    return isOnline ? "online" : "offline";
}   

let userStatus = getUserStatus(true);
let statusString = `The user is currently ${userStatus}.`;
console.log(statusString); // Output: The user is currently online.

//-- String literals with array expressions
let fruits = ["apple", "banana", "cherry"];
let fruitsString = `My favorite fruits are: ${fruits.join(", ")}.`;
console.log(fruitsString); // Output: My favorite fruits are: apple, banana, cherry.

//-- String literals with object expressions
let person = { name: "Hepzibha", age: 30 };
let personString = `The person's name is ${person.name} and they are ${person.age} years old.`;
console.log(personString); // Output: The person's name is Hepzibha and they are 30 years old.  

//-- String literals with nested template literals
let nestedTemplateLiteral = `This is a nested template literal: ${`The current year is ${new Date().getFullYear()}.`}`;
console.log(nestedTemplateLiteral); // Output: This is a nested template literal: The current year is 2024. 

//-- String literals with tagged templates
function tag(strings, ...values) {
    console.log(strings); // Array of string literals   
    console.log(values); // Array of expression values
    return "Tagged template result";
}
let taggedString = tag`Hello, ${userName}! You have ${fruits.length} favorite fruits.`;
console.log(taggedString); // Output: Tagged template result    

//-- String literals with raw strings
let rawString1 = String.raw`This is a raw string with a newline character: \n and a tab character: \t.`;
console.log(rawString1); // Output: This is a raw string with a newline character: \n and a tab character: \t.   

//-- String literals with internationalization
let number = 1234567.89;
let formattedNumber = new Intl.NumberFormat('en-US').format(number);
console.log(formattedNumber); // Output: 1,234,567.89

//-- String literals with localization
let date = new Date();
let formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);
console.log(formattedDate); // Output: Saturday, June 29, 2024 at 10:00:00 PM GMT+00:00 

//-- String literals with pluralization
function pluralize(count, noun) {
    return `${count} ${noun}${count !== 1 ? 's' : ''}`;
}
let itemCount = 5;
let pluralizedString = `You have ${pluralize(itemCount, 'item')}.`;
console.log(pluralizedString); // Output: You have 5 items.

//-- String literals with conditional pluralization
let messageCount = 1;
let conditionalPluralizedString = `You have ${messageCount} ${messageCount === 1 ? 'message' : 'messages'}.`;
console.log(conditionalPluralizedString); // Output: You have 1 message.    

//-- String literals with nested conditional expressions
let userRole = "admin";
let accessMessage = `You have ${userRole === "admin" ? "full access" : userRole === "editor" ? "limited access" : "no access"}.`;
console.log(accessMessage); // Output: You have full access.

//-- String literals with function expressions
let functionExpressionString = `The result of the function expression is: ${(() => 5 * 10)()}.`;
console.log(functionExpressionString); // Output: The result of the function expression is: 50. 

//-- String literals with array mapping
let numbers = [1, 2, 3];
let mappedString = `The squares of the numbers are: ${numbers.map(n => n * n).join(", ")}.`;
console.log(mappedString); // Output: The squares of the numbers are: 1, 4, 9.

//-- String literals with object property access
let user = { name: "Hepzibha", age: 30 };
let objectPropertyString = `The user's name is ${user.name} and they are ${user.age} years old.`;
console.log(objectPropertyString); // Output: The user's name is Hepzibha and they are 30 years old.    

//-- String literals with nested object access
let nestedObject = { user: { name: "Hepzibha", age: 30 } };
let nestedObjectString = `The user's name is ${nestedObject.user.name} and they are ${nestedObject.user.age} years old.`;
console.log(nestedObjectString); // Output: The user's name is Hepzibha and they are 30 years old.      

//-- String literals with conditional object access
let optionalUser = null;
let conditionalObjectAccessString = `The user's name is ${optionalUser ? optionalUser.name : "unknown"}.`;
console.log(conditionalObjectAccessString); // Output: The user's name is unknown.  

//-- String literals with nested conditional object access
let nestedOptionalUser = { profile: null };
let nestedConditionalObjectAccessString = `The user's profile name is ${nestedOptionalUser.profile ? nestedOptionalUser.profile.name : "unknown"}.`;
console.log(nestedConditionalObjectAccessString); // Output: The user's profile name is unknown.    

//-- String literals with tagged template functions
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {  
        return `${result}${string}<strong>${values[i] || ''}</strong>`;
    }, '');
}   
let highlightedString = highlight`This is a ${"highlighted"} string.`;
console.log(highlightedString); // Output: This is a <strong>highlighted</strong> string.   

//-- String literals with raw tagged templates
function rawTag(strings, ...values) {
    return strings.raw.reduce((result, string, i) => {  
        return `${result}${string}<strong>${values[i] || ''}</strong>`;
    }, '');
}
let rawString = rawTag`This is a ${"raw"} string.`;
console.log(rawString); // Output: This is a <strong>raw</strong> string.    

//-- String literals with internationalization tags
function i18nTag(strings, ...values) {
    // This is a placeholder for an internationalization function   
    return strings.reduce((result, string, i) => {
        return `${result}${string}${values[i] || ''}`;
    }, '');
}   
let i18nString = i18nTag`Hello, ${userName}! Welcome to our website.`;
console.log(i18nString); // Output: Hello, Hepzibha! Welcome to our website.    

//-- String literals with localization tags
function l10nTag(strings, ...values) {
    // This is a placeholder for a localization function    
    return strings.reduce((result, string, i) => {
        return `${result}${string}${values[i] || ''}`;
    }, '');
}   
let l10nString = l10nTag`The current date is ${new Date().toLocaleDateString()}.`;
console.log(l10nString); // Output: The current date is 6/29/2024.  

//-- String literals with pluralization tags
function pluralTag(strings, ...values) {
    // This is a placeholder for a pluralization function
    return strings.reduce((result, string, i) => {
        return `${result}${string}${values[i] || ''}`;
    }, '');
}           
let pluralizedTagString = pluralTag`You have ${itemCount} ${itemCount === 1 ? 'item' : 'items'}.`;
console.log(pluralizedTagString); // Output: You have 5 items.  

//-- String literals with conditional pluralization tags
function conditionalPluralTag(strings, ...values) {
    // This is a placeholder for a conditional pluralization function       
    return strings.reduce((result, string, i) => {
        return `${result}${string}${values[i] || ''}`;
    }, '');
}   
let conditionalPluralizedTagString = conditionalPluralTag`You have ${messageCount} ${messageCount === 1 ? 'message' : 'messages'}.`;
console.log(conditionalPluralizedTagString); // Output: You have 1 message. 

//-- String literals with nested conditional pluralization tags
function nestedConditionalPluralTag(strings, ...values) {
    // This is a placeholder for a nested conditional pluralization function    
    return strings.reduce((result, string, i) => {
        return `${result}${string}${values[i] || ''}`;
    }, '');
}
let nestedConditionalPluralizedTagString = nestedConditionalPluralTag`You have ${messageCount} ${messageCount === 1 ? 'message' : 'messages'} and ${itemCount} ${itemCount === 1 ? 'item' : 'items'}.`;
console.log(nestedConditionalPluralizedTagString); // Output: You have 1 message and 5 items.       

//-- String literals with function expressions in tags
function functionExpressionTag(strings, ...values) {
    // This is a placeholder for a function expression tag  
    return strings.reduce((result, string, i) => {
        return `${result}${string}${values[i] || ''}`;
    }, '');
}
let functionExpressionTagString = functionExpressionTag`The result of the function expression is: ${(() => 5 * 10)()}.`;
console.log(functionExpressionTagString); // Output: The result of the function expression is: 50.      

//-- String literals with array mapping in tags
function arrayMappingTag(strings, ...values) {
    // This is a placeholder for an array mapping tag   
    return strings.reduce((result, string, i) => {
        return `${result}${string}${values[i] || ''}`;
    }, '');
}
let arrayMappingTagString = arrayMappingTag`The squares of the numbers are: ${numbers.map(n => n * n).join(", ")}.`;
console.log(arrayMappingTagString); // Output: The squares of the numbers are: 1, 4, 9. 

//-- String literals with object property access in tags
function objectPropertyTag(strings, ...values) {
    // This is a placeholder for an object property access tag  
    return strings.reduce((result, string, i) => {
        return `${result}${string}${values[i] || ''}`;
    }, '');
}
let objectPropertyTagString = objectPropertyTag`The user's name is ${user.name} and they are ${user.age} years old.`;
console.log(objectPropertyTagString); // Output: The user's name is Hepzibha and they are 30 years old.     

//-- String literals with nested object access in tags
function nestedObjectAccessTag(strings, ...values) {
    // This is a placeholder for a nested object access tag
    return strings.reduce((result, string, i) => {
        return `${result}${string}${values[i] || ''}`;
    }, '');
}
let nestedObjectAccessTagString = nestedObjectAccessTag`The user's name is ${nestedObject.user.name} and they are ${nestedObject.user.age} years old.`;
console.log(nestedObjectAccessTagString); // Output: The user's name is Hepzibha and they are 30 years old. 

//-- String literals with conditional object access in tags
function conditionalObjectAccessTag(strings, ...values) {
    // This is a placeholder for a conditional object access tag    
    return strings.reduce((result, string, i) => {
        return `${result}${string}${values[i] || ''}`;
    }, '');
}
let conditionalObjectAccessTagString = conditionalObjectAccessTag`The user's name is ${optionalUser ? optionalUser.name : "unknown"}.`;
console.log(conditionalObjectAccessTagString); // Output: The user's name is unknown.   

//-- String literals with nested conditional object access in tags
function nestedConditionalObjectAccessTag(strings, ...values) {
    // This is a placeholder for a nested conditional object access tag
    return strings.reduce((result, string, i) => {
        return `${result}${string}${values[i] || ''}`;
    }, '');
}
let nestedConditionalObjectAccessTagString = nestedConditionalObjectAccessTag`The user's name is ${optionalUser ? optionalUser.name : "unknown"} and they are ${optionalUser && optionalUser.age ? optionalUser.age : "unknown"} years old.`;
console.log(nestedConditionalObjectAccessTagString); // Output: The user's name is unknown and they are unknown years old.  


