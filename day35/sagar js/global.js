var city = "hyd";  //this is global scope element 

function fn(){
    console.log("fn is called");
    
}//this function is also a global scope element

function f1(){
    console.log(city); //that city calling here in function
    fn(); // same as this also
}

function f2(){
    console.log(city); //that city calling here in function
    fn(); // same as this also
}

fn();

f1();

f2();
