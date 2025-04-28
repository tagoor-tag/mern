const user = { income : 1000 }; 

var preTax = function (){
    return this.income * (15/100);
    
}

let tax = preTax.bind(user);

console.log(tax());
