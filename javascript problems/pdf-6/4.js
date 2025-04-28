const obj1 = { a: 1, b: 2 }; 
const obj2 = { c: 3, d: 4 }; 

function mergeObj(){
    let newObj = {...obj1,...obj2}

    console.log(newObj);
    
}

mergeObj();