const user = { name: "David", age: 40, city: "LA", job: "Engineer" };

function extract(){
    let {name , ...rest} = user;

    let newObj = {name , rest}

    console.log(newObj);
    
}

extract()