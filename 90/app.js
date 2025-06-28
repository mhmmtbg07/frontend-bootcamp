// Methods ( Functions ) with return

function calc (number){
    let total = number**3;
    // normaly you cant take "total" out in function but in here
    // return "total" = total now global data
    return total;
}

let final = calc(3);
document.writeln(final);