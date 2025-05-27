/*  ------> Assignment Operators
    =
    ==
    ===
    +=
    *=
    -=
    /=
    %=
    **=
*/

// "="
let a = 5;

// "==" !data type not important!
let b = 10;
let final = (a+b);
console.log("10" == b); // data type not important
console.log(final == 10);
console.clear();

// "===" !data type important!
console.log("10" === b); // data type not same!
console.clear();

// "+=" = +
var No = 20; 
// var no = no+5; "this is same"
No += 5; // but this is better
console.log(No);

// "-=" = -
// var No = No-10;
No -= 10;
console.log(No);

// "*=" = *
No *= 2;
console.log(No);

// "/=" = /
No /= 3;
console.log(No);

// "%=" = %
No %= 7;
console.log(No);

// "**=" = **
No **= 2;
console.log(No);