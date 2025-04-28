let user = {
    name : "Liam",
    age : 25,
    country : "USA"
};

let arguPassCall = function (name , age , country){
    return `${this.name} is ${this.age} years old from ${this.country}`
}

console.log(arguPassCall.call(user));
