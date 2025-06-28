// Methods with parameters

//          ( parameters )
/*
function write (name , lastName){
    document.writeln(name + "" + lastName);
}

function calculate (number){
    document.writeln(number**3);
}

write("Muhammet " , " BAĞ");
calculate(5);
calculate(3);*/

let age = Number(prompt("Please enter your age :)"));

function check (age){
    if (age >= 18){
        document.writeln("You can take Driving Licence")
    }else{
        document.writeln("Sorry , your age too low, you can't take Driving Licence")
    }
}

check(age);