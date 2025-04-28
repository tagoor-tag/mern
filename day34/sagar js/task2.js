//spread operator ...<object-name> or <array-name>

//rest is parameter ...x is used consider as remaing elements in parathasis
//rest will must be call last in function
//we can access the remaining elements as array 

function getData(a, ...p1){

    console.log("Hello Data", a , p1);
    
}

getData("hiii",10,20,30,40)