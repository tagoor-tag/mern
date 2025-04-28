function findMax(arr) {
    let max = -Infinity; 

    for (const element of arr) {
        if (element > max) {
            max = element; 
        }
    }

    return max;
}

let maxNumber = findMax([10, 30, 40, 80, 90])

console.log(maxNumber);
