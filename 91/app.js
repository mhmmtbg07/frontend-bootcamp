// Lenght finder example
debugger;
let text = "Lorem ipsum dolor sit amet consectetur.";
let letter = prompt("Please enter a lenght");

function finder (letter){
    let total = 0;
                
    for (let i = 0; i < text.length; i++){
        // check letters one by one     /      user input check
        if (text.charAt(i).toLowerCase() === letter.toLowerCase()){

            total += 1; // if "text" letter = input total+=1;
        }
    }
    return total;   // return for output "letter" paremeter
}

let final = finder(letter);
alert("Number of letter : " + final);