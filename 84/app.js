/* Prime Number */

let number = Number(prompt("Please enter a number"));
let result = true;

for (let i = 2; i <= Math.floor(number / 2); i++){
    if(number % i == 0){
        // not a prime number !
        result = false;

        break;
    }
}

if(result){
    alert(number + " This number is a" + " Prime Number");
}else{
    alert(number + " This number is not a" + " Prime Number")
}