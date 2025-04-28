function atmWithdraw(balance, withdraw){
    let remaing = 0;
    
    if(withdraw % 100 === 0){


        if(balance < withdraw){
            console.log("Withdrawal is not Possible");
            
        }else if(balance > withdraw){
            remaing = balance - withdraw;
        }else{
            console.log("Your entering wrong number");
        }
    }else if(withdraw % 100 !== 0){
        console.log("Withdrawal with multiples of 100 only");
        
    }
    
    console.log("Withdrawal Successful. Remaing Balance:" + remaing);
    
}

atmWithdraw(1500, 100);