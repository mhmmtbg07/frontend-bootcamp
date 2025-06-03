// ATM Example with JS

/*
    // ATM Work System
    1- show balance
    2- Withdraw
    3- Deposit
    4- Quit
*/

let lnbreak = "\r\n";
let balance = 100;

// Text
let text = "Please select your process." + lnbreak
+ "1- See your account balance." + lnbreak
+ "2- Withdraw money from your account." + lnbreak
+ "3- Deposit money to your account." + lnbreak
+ "4- Leave the app.";

// Input from user
let input = Number(prompt(text));

// Switch Case
switch(input){
    /* Process */
        // Show Balance
        case 1:
            // Balance
            if(balance > 1){
                document.writeln("Here is your total account money : " + balance + " $");
            }else{
                alert("Sir you dont have money !!! Money : " + balance + " $");
            }
        break;

        // Withdraw money
        case 2:
            // Withdraw Inputs
            const withdrawText = "Please withdraw your money :" + balance + " $";
            const withdrawInput = Number(prompt(withdrawText));
            const withdraw = balance-withdrawInput;

            if(balance >= withdrawInput){
                document.writeln("Here is your account money : " + withdraw+ " $");
                document.writeln("<br>Withdraw money : " + withdrawInput + " $");
            }
            if(withdrawInput == 0){
                alert("Please enter some money!!!");
            }
            if(withdrawInput > balance){
                alert("You dont have that much money : " + balance + " $");
            }
        break;

        // Deposit Money
        case 3:
            // Deposit Inputs
            const depositText = "Please deposit your money"
            const depositInput = Number(prompt(depositText));
            const deposit = balance+depositInput;

            if(depositInput > 1){
                document.writeln("Here is your account money : " + deposit + " $");
                document.writeln("<br>deposit money : " + depositInput + " $");
            }else{
                alert("Please Deposit some money !!!");
            }
        break;

        // Leave the app
        case 4:
            alert("You have been leave the account");
            console.log("User was leave the app...");
        break;

        default:
            alert("Please select a porcess 1 - 4");
        break;
}