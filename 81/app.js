/* Do While  */

let final = 1;
let count = 0;

do{
    if (count % 2 == 1) {
        final += count;
    }

    count++;
}while (count <= 10);
console.log("Total ; " + count);