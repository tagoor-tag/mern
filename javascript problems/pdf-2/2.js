function checkNumber(num){
    if(num > 0){
        console.log("Posistive");
        
    }else if(num == 0){
        console.log("Zero");
        
    }else if(num < 0){
        console.log("Negative");
        
    }else{
        console.log("Input is not number");
        
    }
}

checkNumber(5);
checkNumber(-3);
checkNumber(0);