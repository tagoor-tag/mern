const a1 = [1, 2], a2 = [3, 4], a3 = [5, 6]; 

function mergesMultiArray(){
    let newArr = [...a1, ...a2,...a3];

    return newArr;
};

console.log(mergesMultiArray());
