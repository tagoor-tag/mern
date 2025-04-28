
function storeUserData(...rest){
    let [name , age , job] = rest;

    let newObj = {name, age, job};

    return newObj;

}




console.log(storeUserData("John", 28, "Developer")); 