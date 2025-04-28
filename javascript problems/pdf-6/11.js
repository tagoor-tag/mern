const person = { name: "Eve", age: 35 }; 

function clone(){
    let {name , age} = person;

    let newObj = {name, age}

    newObj.age= 40;

    console.log(newObj);
    
}

clone()

console.log(person);
