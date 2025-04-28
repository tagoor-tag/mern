// Object Destructuring  in js 


var emp = {
    empName: "Tash",
    gender: "male",
    city: "mumbai",
    phone: 898989897
};

var {phone ,city} = emp

function f1(){
    console.log(phone);
    
};

function f2(){
    console.log(city);
    
};

function f3(){
    console.log();
    
};

f1();

f2();