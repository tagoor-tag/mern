function sumEvenNumbers(arr) {
    let sum = 0;

    for (let element of arr) {

        if (element % 2 ===
             0) {
            sum += element;
        }

    }
        return sum;

}

console.log(sumEvenNumbers([2, 5, 8, 11, 4])); 