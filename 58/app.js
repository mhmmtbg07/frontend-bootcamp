/* 
    (Varibles)
    --> var
    --> let 
    --> const
*/

function hello(){
    // "var" means function scope = turns the variable a function scope
    var helloWorld = "Hello World!";
    
    if(true){
        console.log(helloWorld);
    };
};

hello();
var number1 = 10;
var number1 = 20;
// var can a global scope
console.log(number1);
/*
let number2 = 1;
let number2 = 2;
// but let/const cant becouse they are just using in block scope
console.log(number2);
*/

