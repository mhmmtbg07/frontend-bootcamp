/* factorial Calculation */


// 6 = 6.5.4.3.2.1 = number
let number = Number(prompt("Please enter a number"));
let calc = 1;

if(number = 0){
    alert("Please enter a true number")
}

for (let i = 1; i <= number; i++){
    calc = calc*i;
}
alert("Calculated answer = " + calc);