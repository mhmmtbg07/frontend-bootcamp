/* Armstrong Number founder */

let number = prompt("Please select a number!");
var total = 0;

for (let i = 0; i < number.length; i++){
    let calc = number.charAt(i);
    total += calc*calc*calc;
}

if (Number(number) == total){
    alert("This is a Amstrong Number!");
}else{
    alert("This is not a Amstrong Number!");
}