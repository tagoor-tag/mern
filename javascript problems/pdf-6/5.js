function sum(...rest) {
    let max = 0;

    for (const element of rest) {
         max = max + element;
    }

    return max;
}

console.log(sum(2, 3, 5)); 