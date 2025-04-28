const user = { name: "Emma" }; 

var objCall = function (){
    return `Hello, ${this.name}`;
    
}

let greet = objCall.bind(user);

console.log(greet());
