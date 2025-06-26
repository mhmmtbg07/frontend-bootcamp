/* factorial Calculation */

// 6 = 6.5.4.3.2.1 = number
let no = Number(prompt("Please enter a number"));
let calc = 1;   

for (let i = 1; i <= no; i++){
    calc = calc*i;
}
alert("Calculated answer = " + calc);