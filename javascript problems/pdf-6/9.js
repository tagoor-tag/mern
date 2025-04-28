const user = { name: "Charlie" };

function defaultDest(){
    let {name , age = 25} = user;

    let newObj = {name , age};

    console.log(newObj);
    
}

defaultDest()