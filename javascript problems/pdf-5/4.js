function greet(Guest){
    if(Guest == null){
        console.log("Hello Guest!");
        
    }else{
        console.log(`Hello ${Guest}!`);

    }
    
}

greet(); 
greet("John"); 