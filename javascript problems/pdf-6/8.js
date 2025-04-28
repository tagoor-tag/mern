const user = { name: "Bob", age: 30, city: "NYC" }; 

function destObj(){
    let  {name , age } = user;

    let newObj = {name , age};

    console.log(newObj);
}

destObj()