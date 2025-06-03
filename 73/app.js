// Switch Case Syntax & Weekly days example

// let number = Number(prompt("Please enter a number 1 - 5"));

// switch(number){
//     // case 1
//     case 1:
//         //code
//         document.writeln("Number 1")
//     break;

//     // case 2
//     case 2:
//         //code
//         document.writeln("Number 2");
//     break;
    
//     // case 3
//     case 3:
//         //code
//         document.writeln("Number 3");
//     break;

//     // case 4
//     case 4:
//         //code
//         document.writeln("Number 4");
//     break;

//     // case 5
//     case 5:
//         //code
//         document.writeln("Number 5");
//     break;

//     default:
//         //code
//         alert("Please enter a number in 1 - 5 !!!!");
//     break;
// }

// Week Days

let lnbreak = "\r\n";
let text = 
"Please select a day" + lnbreak
+"1- Monday" + lnbreak
+"2- Tuesday" + lnbreak
+"3- Wednesday" + lnbreak
+"4- Thursday" + lnbreak
+"5- Friday" + lnbreak
+"6- Saturday" + lnbreak
+"7- Sunday";

// Input
let input = Number(prompt(text));

// Switch Case
switch(input){
    // Case Monday
    case 1:
        document.writeln("Today is Monday");
    break;

    // Case Tuesday
    case 2:
        document.writeln("Today is Tuesday");
    break;

    // Case Wednesday
    case 3:
        document.writeln("Today is Wednesday");
    break;

    // Case Thursday
    case 4:
        document.writeln("Today is Thursday");
    break;

    // Case Friday
    case 5:
        document.writeln("Today is Friday");
    break;

    // Case Saturday
    case 6:
        document.writeln("Today is Saturday");
    break;

    // Case Sunday
    case 7:
        document.writeln("Today is Sunday");
    break;

    // Default
    default:
        alert("Please select a correct day no");
    break;
}