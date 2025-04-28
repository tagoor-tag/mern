const person = { name: "Alice", age: 25 }; 

function copyObj(){
    let newObj = {...person}

    console.log(newObj);
}

copyObj()