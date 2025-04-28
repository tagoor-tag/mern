let obj = {
    number: 1234
}

function sumOfDigits() {
    let sum = this.number.toString()
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0);;
    return sum;
}

console.log(sumOfDigits.call(obj)); 
