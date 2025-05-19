// Scope 
/* var - let - const */
/* 
    ------ Scope ------
    -> global scope
    -> Function scope
    -> Block scope
*/

// Global Scope
var a = 10;
var b = 20;

function hello (){

    // Function Scope
    let item = 5;
    let product = "Chair";
    console.log(a+b);
    console.clear();
    // cant output becouse its not a global scope
    document.writeln(name);

    if(true){
        // Block Scope
        let name = "Muhammet";
        console.log(item + product);
    };
};

// Reason for work "hello" function
hello();