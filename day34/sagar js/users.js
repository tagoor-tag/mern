//Array Destructuring  in js 


var arr = [10,20,30,40,50];

var [_,x,y] = arr;  //refrence to the array 

function f1(){
    // console.log(a,b);//40 50 
    
}

function f2(){
    // console.log(y,z); //20 30 
    
}

function f3(){
    console.log(_); //10
    
}
f1();
f2();
f3();