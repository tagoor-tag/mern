const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var arr = numbers.filter((element) => {
    if(element % 2 == 0 ){
        return element;
    }
})

console.log(arr);
