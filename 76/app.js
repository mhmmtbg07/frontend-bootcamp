/*
    Type of Conversions

    1- Strings
    2- Numbers
    3- Booleans
    4- Undefined
    5- Null
    6- Objects
    7- Functions 
*/

/* String -----> Number */
var a = "5"; // String
var a = Number(a); // Number
console.log(typeof a);

/* Number -----> String */
var b = 5; // Number 
console.log(String(b)); // String

/* Number -----> Float */
var c = 5.2; // Number
console.log(parseFloat(c)); // Float

/* Float -----> Integer */
var m = 20.5; // Float
console.log(parseInt(m)); //

/* Boolean -----> String / Number */
var boolean = true; // Boolean
var booleanFalse = false;
console.log(Number(booleanFalse)); // Number
console.log(typeof boolean);
var boolean = String(boolean); // String
console.log(boolean);
console.log(typeof b);
console.log(b);