const arr = [1, 2, 2, 3, 4, 4, 5];

function remDub() {
    let newArr = [...arr];
    let uniqueArr = [...new Set(newArr)]; 
    return uniqueArr;
}

console.log(remDub());  

