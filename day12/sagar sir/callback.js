function f1(x){
    console.log("f1 is called");
    // d
    // // console.log(x); //this is used when elements is data types
        x(); //this is used when element is function
}

function f2(y){
    console.log("f2 is called");
    console.log(y);
    
    // y();
}

var a = function(){

    console.log("this is anonymous function");
    
}

// const arr = [1,2,3,4,5]
f1(f2);
f2(a);



// f1(a);