// Decimal to Binary Conversion

decimelToBinary(25);

function decimelToBinary (number){
    let binary = "";

    while (true) {
        binary += (number %2).toString(); 

        number = Math.floor(number/2);

        if (number == 1) {
            // No more procces break the procces
            binary += 1;
            break;
        }
    }

    let result = reverse(binary);

    console.log (result);
    document.writeln("decimel to Binary = " + result)
}

function reverse (binary) {
    // reverse for binary calculation
    let reverseBinary = "";

    for (let i = binary.length-1 ; i >= 0 ; i--) {
        reverseBinary += binary.charAt(i);
    }

    return reverseBinary;
}