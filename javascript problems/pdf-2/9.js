function countProperties(obj){
    let count = 0;

    for (const key in obj) {
        if(obj.hasOwnProperty(key)){

            count ++;
        }
    }

    return count;
}

const user = { name: "Alice", age: 25, city: "New York" }; 
console.log(countProperties(user)); 