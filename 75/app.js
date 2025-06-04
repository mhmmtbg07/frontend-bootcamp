/* TYT Score Calculation */

//  1 correct = 4point
//  4 false = -1point
//  school point max = 60
//  all lessons question = 20
//  lessons
/*
    1-Science
    2-Math
    3-Physical
    4-social
*/

let lnbreak = "\r\n";

// school point
let schoolPoint = 0;

// lessons
let scienceCorrect = 0;
let scienceFalse = 0;

let mathCorrect = 0;
let mathFalse = 0;

let physicalCorrect = 0;
let physicalFalse = 0;

let socialCorrect = 0;
let socialFalse = 0;

// Text
let text = "Please enter a process..." + lnbreak
+ "1- TYT Score Calculation" + lnbreak
+ "2- Leave the app";

// Input
let logIn = Number(prompt(text));

// Switch Case
switch(logIn){
    case 1:
        // TYT Score Calculation
        let schoolPoint = Number(prompt("Please enter your school point"));
        if(schoolPoint <= 60){
            console.log("School Point : " + schoolPoint);
        }else{
            alert("Please enter correct point !!!");
        }

        // Science
        
        let scienceCorrect = Number(prompt("Science Correct"));
        // Science Correct
        if(scienceCorrect <= 20){
        }else{
            alert("Please enter correct point !!!");
        }

        let scienceFalse = Number(prompt("Science False"));
        // Science False
        if(scienceFalse < 20 && scienceFalse < scienceCorrect){
        }else {
            alert("Please enter correct point !!!");
        }
        
        // Math

        let mathCorrect = Number(prompt("Math Correct"));
        // Math Correct
        if(mathCorrect <= 20){
        }else{
            alert("Please enter correct point !!!");
        }

        let mathFalse = Number(prompt("Math False"));
        // Math False
        if(mathFalse < 20 && mathFalse < mathCorrect){
        }else {
            alert("Please enter correct point !!!");
        }

        // Physical

        let physicalCorrect = Number(prompt("Physical Correct"));
        // Physical Correct
        if(physicalCorrect <= 20){
        }else{
            alert("Please enter correct point !!!");
        }

        let physicalFalse = Number(prompt("Physical False"));
        // Physical False
        if(physicalFalse < 20 && physicalFalse < physicalCorrect){
        }else {
            alert("Please enter correct point !!!");
        }

        // Social

        let socialCorrect = Number(prompt("Social Correct"));
        // Social Correct
        if(socialCorrect <= 20){
        }else{
            alert("Please enter correct point !!!");
        }

        let socialFalse = Number(prompt("Social False"));
        // Social False
        if(socialFalse < 20 && socialFalse < socialCorrect){
        }else {
            alert("Please enter correct point !!!");
        }

        // Calculate
        // Science
        let sciencePoint = scienceCorrect-(scienceFalse/4);
        console.log("science : " +sciencePoint);

        // Math
        let mathPoint = mathCorrect-(mathFalse/4);
        console.log("Math : " +mathPoint);

        // Physical
        let physicalPoint = physicalCorrect-(physicalFalse/4);
        console.log("Physical : " +physicalPoint);
        
        // Social
        let socialPoint = socialCorrect-(socialFalse/4);
        console.log("Social : " +socialPoint);

        // Total
        let total = (sciencePoint + mathPoint + physicalPoint + socialPoint)*4;
        console.log("Total : " +total);

        // TYT Total
        if(total >=100){
            document.writeln("Congratulations you passed");
        }else{
            document.writeln("Oopsie, you failed the exam, try again!");
        };
    break;

    case 2:
        alert("You successfully leave from the app.");
        console.log("User logout from app.");
    break;

    default:
        alert("Please select a process!!!");
    break;
}