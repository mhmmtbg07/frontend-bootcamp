// Data Types in JS
/*
    "string"
    "number"
    "boolean"
    "null"
    "undefined"
    "object"
    "function"
*/

// "string" data type
let a = "This is a -string- <br>";
document.writeln(a);
console.log(typeof a);

// "number" data type
let num1 = 10;
let num2 = 4.9;
let total = num1 * num2;
console.log(total);
console.log(typeof total);

// "boolean" data type
// true OR false
console.log(1>2);
console.log(2>1);
console.log(typeof (1>2));

// "null" data type (empty)
var empty = null;
console.log(typeof empty);

// "undefined" data type
var helloworld;
console.log(typeof helloworld);

// "object" data type
let insan = {
    name : "muhammet",
    userName : "BAĞ",
    age : 18,
    email : "fake@gmail.com",
}
console.log(insan);
console.log(typeof insan);

let rakamlar = [1,2,3,4,5,6];
console.log(rakamlar);
console.log(typeof rakamlar);

// "Function" data type
let func = function (){
    console.log("Hello World!");
    console.log(typeof func);
};
func();