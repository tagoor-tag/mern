function Car(name) {
    this.name = name;
    this.getName = () => this.name;
}
const myCar = new Car("Ford"); 

console.log(myCar.getName());
