const user = { 
    name: "John",
    objCall() {
        return `Hello, ${this.name}`;
    }
};

let greet = user.objCall.bind(user);

setTimeout(() => {
    console.log(greet());  
}, 2000);
