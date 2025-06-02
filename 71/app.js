// Gas Station

/*
    reosourse types:
    1-Diesel
    2-Gasoline
    3-LPG

    inputs:
    1-type of resource
    2-Liter
*/

let diesel = 24.53;
let gasoline = 22.25;
let lpg = 11.1;

const lnbreak = "\r\n";
const resource = "1 = Diesel" + lnbreak + "2 = Gasoline" + lnbreak + "3 = LPG" + lnbreak + "Please select a resource"

let type = Number(prompt(resource));
let liter = Number(prompt("Please enter amount of resource (Liter)"));
let money = Number(prompt("Please enter your balance $"));

// Resource
if(type == ""){
    alert("Please select a resource");
}else if (resource>3){
    alert("Please select a resource");
}
if(type==1){
    // diesel
    const totalDiesel = diesel*liter;
    // pay
    if(totalDiesel>money){
        document.writeln("Your money is too low <br>" + "money "+ money + "<br>fee " + totalDiesel);
    }else if(totalDiesel<=money){
        // change
        const change1 = money-totalDiesel;
        document.writeln("sell successfully payed,<br> here is your change : " + change1);
    }

}else if (type==2){
    // gasoline
    const totalGasoline = gasoline*liter;
    //pay
    if(totalGasoline>money){
        document.writeln("Your money is too low <br>" + "money "+ money + "<br>fee " + totalGasoline);
    }else if(totalGasoline<=money){
        // change
        const change2 = money-totalGasoline;
        document.writeln("sell successfully payed,<br> here is your change : " + change2);
    }

}else if (type==3){
    // LPG
    const totalLPG = lpg*liter;
    // pay
    if(totalLPG>money){
        document.writeln("Your money is too low <br>" + "money "+ money + "<br>fee " + totalLPG);
    }else if(totalLPG<=money){
        // change
        const change3 = money-totalLPG;
        document.writeln("sell successfully payed,<br> here is your change : " + change3);
    }
}