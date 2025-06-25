/* Break - Countinue */

// Break
let number = 1;

while (number <= 10){
    document.writeln(number);

    if(number == 8){
        break;
    }

    number++;
}

// Continue
let no = 0;

while (no <= 10){
    no++;    

    if(no > 10){
        break;
    }

    if(no == 8){
        continue;
    }

    document.writeln(no + "<br>");
}