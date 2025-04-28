const person = {
    name: "Alex",
    getName() {
        return this.name;
    }
};
const { getName } = person;

console.log(getName());
