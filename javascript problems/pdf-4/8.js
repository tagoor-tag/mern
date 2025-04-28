const car = { brand: "Toyota", model: "Camry" };

Object.seal(car);

car.model = "Corolla";

car.price = 45500;

console.log(car);
