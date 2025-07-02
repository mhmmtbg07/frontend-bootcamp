// Binary to Decimal Conversion
let binary = "1010";

function binaryToDecimal (binary) {
    let total = 0;
    let pow = 0;

    for (let i = binary.length-1 ; i >= 0 ; i--) {
        if (Number(binary.charAt(i)) != 0) {
            total += Number (binary.charAt(i)) * Math.pow(2,pow);
        }

        pow++;
    }

    document.writeln("Binary to Decimal = " + total)
}

binaryToDecimal (binary);