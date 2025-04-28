const numbers = [10, 25, 70, 100, 40, 200, 5, 60];

var maxNum = numbers.reduce((max, current) => {
    // console.log(current)
    return current > max ? current : max;
}, numbers[0])

console.log(maxNum);
