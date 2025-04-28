
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

const dog = new Animal();
const speakFunction = dog.speak.bind(dog);
speakFunction();   // undefined makes a noise