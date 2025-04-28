const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6]; 

function mergeArray(){
    let newArr = [...arr1,...arr2];

    console.log(newArr);
    
}

mergeArray()