const car = {
    brand: "Toyota",
    getBrand: function () {
        console.log(this.brand);
    },
}; 

let getBrand = car.getBrand.bind(car);


getBrand();