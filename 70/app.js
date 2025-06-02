// Body Mass Index examples

//input
let kilo = Number(prompt("Please enter your kilo"));
let height = Number(prompt("Please enter your Height"));

var finish =  kilo/(height*2);

if(finish <18.5){
    document.writeln("Body Mass Index is low");
}else if(finish>=18.5 && finish<=24.9){
    document.writeln("Body Mass Index is medium");
}else if (finish>=25 && finish<=29.9){
    document.writeln("Body Mass Index is deal");
}else if (finish>=30 && finish<=39.9){
    document.writeln("Body Mass Index is high");
}else if (finish>=40 && finish<=49.9){
    document.writeln("Body Mass Index is obez");
}else if (finish>=50){
    document.writeln("Body Mass Index is morbid obez");
}
    console.log(finish);