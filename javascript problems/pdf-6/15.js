function createObject(...arr){

    let [key , value]  = arr;

    let newObj ={[key] : value}

    return newObj
}



console.log(createObject("price", 500));  // {price : 500}
