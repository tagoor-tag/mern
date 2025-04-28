var obj ={
    name :"yash",
    gender:"male",
    address:{               //Nested object
        city:"hyd",  
        state:"TS"
    }
}

console.log(obj.address.city);

console.log(obj["address"]["city"]);

