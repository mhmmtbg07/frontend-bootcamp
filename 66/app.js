/*  
    Condition Structures
*/

let not = 75;

// if(true) = work "if"
if(not>80){
    console.log("Congratulations, you passed : " + not);
}
// if(false) = work "else"
else{
    console.log("Oppsie, you failed the exam :" + not);
}

let balance = Number(prompt("Money : "));
let age = Number(prompt("age : "));
if(balance>200 && age>=18){
    document.writeln("Here is your product");
}else{
    document.writeln("sorry you cant take that product");
}