// any vaiable or function defined using var those varibles
//and function are called scope

//let and const by default will be consider as block scope

if (true) {
    let city = "pune";

    var name = "raj";
    function f1() {
        console.log("f1 is called");

    }

    f1();
    console.log(name);
    console.log(city);

}

f1(); // here f1 is block scope element but function is called in outside

console.log(name); // var block scope element is called in outside

console.log(city); //let block scope element is not called in outside

