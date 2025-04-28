const user = {
    name: "Bob",
    greet() {
        return `Hello, ${this.name}`;
    },
    farewell() {
        return this.greet() + " - Goodbye!";
    }
};

console.log(user.farewell());
