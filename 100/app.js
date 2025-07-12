/* toString Methods */

var value = "Hello World!";

// Length
console.log(value.length); // 12

// UpperCase
console.log(value.toUpperCase()); // "HELLO WORLD"

// LowerCase
console.log(value.toLowerCase()); // "hello world!"

// Slice
console.log(value.slice(0, 5)); // "Hello"

// IndexOf
console.log(value.indexOf("D")); // 8

// Includes
console.log(value.includes("Dunya")); // true

// StartsWith
console.log(value.startsWith("Hel")); // true

// EndsWith
console.log(value.endsWith("ld!")); // true

// Split
console.log(value.split(" ")); // ["Hello", "World!"]

// Replace
console.log(value.replace("Dunya", "JavaScript")); // "Merhaba JavaScript"
