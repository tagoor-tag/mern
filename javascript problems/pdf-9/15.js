const user = { income : 500 }; 

var preTax = function (){
    let balance = this.income - ( this.income * (10/100) );
    
    return balance
}

let balanceAmount = preTax.bind(user);

console.log(balanceAmount());
