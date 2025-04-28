const person = { 
    name: "Alice", 
    greet: function() { 
    return this.name; 
    } 
}; 

console.log(person.greet());