// Perfect Number example

// 6 - 28 - 496
// 6 = 1 / 2 / 3 / 6 = 12 6*2
// 28 = 1 / 2 / 4 / 7 /14 / 28 = 56 28*2
perfect(496);

function perfect (number) {
    let total = 0;
    for (let i = 2; i <= number/2; i++){
        if(number %i == 0){
            total += i;
        }
    }
    // total = 2 / 3 + 1 + 6
    total += 1 + number;

    // Output
    if (total == number*2){
        alert("This is a Perfect number!");
        console.log(total);
    }else{
        alert("This is not a Perfect number!");
        console.log(total);
    }
}