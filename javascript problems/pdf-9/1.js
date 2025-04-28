const person1 = { name: "Alice" }; 
const person2 = { name: "Bob" };

var objCall = function (){
    console.log(`Hello, my name is ${this.name}`);
    
}

objCall.call(person1);

objCall.call(person2);
