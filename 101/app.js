/* Math Methods */

// floor / ceil / round
let a = 3.15;
let b = 3.80;

console.log(Math.floor(a)); // 3
console.log(Math.ceil(a));  // 4
console.log(Math.round(a)); // nearest number = 3
console.log(Math.round(b)); // nearest number = 4

console.clear();

// Max - Min
console.log(Math.max(1,2,3,4,5,100)); // works with arrays / max number return = 100
console.log(Math.min(1,100,150,200)); // works with arrays / min number return = 1

// ABS
let c = -30;
console.log(Math.abs(c)); // return with absolute value -30 = 30

// SQRT / square root
console.log(Math.sqrt(169)); // Square root = 13

// Random
console.log(Math.round(Math.random()*100)); // return random numbers