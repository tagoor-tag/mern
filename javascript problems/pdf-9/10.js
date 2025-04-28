
const numbers = [2, 3, 4];

function product(...rest) {

    let [a, b, c] = rest;

    return a * b * c;
}

console.log(product.apply(null, numbers));