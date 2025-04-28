function f1(){
    var userName = "Chris"; //Here this element is created f1 function that why it can only use in f1 function

    console.log(userName);
}

function f2(){
    console.log(userName);  //error occurs in here because it is function scope of f1 that why it is error 
    
}

f1();
f2();
