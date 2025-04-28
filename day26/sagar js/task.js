

var products = [{
    brand: "Apple",
    model: "Iphone 15 pro max",
    price: 135000,
    rate: { rating: 4.5, count: 345 }
},
{
    brand: "Apple",
    model: "Iphone 16 pro max",
    price: 190000,
    rate: { rating: 4.6, count: 1245 }
},
{
    brand: "Samsung",
    model: "s23 ultra",
    price: 115000,
    rate: { rating: 4.8, count: 8005 }
},
{
    brand: "RedMe",
    model: "note 13 pro",
    price: 30000,
    rate: { rating: 4.5, count: 345 }
},
{
    brand: "RealMe",
    model: "realme p1 5g",
    price: 13000,
    rate: { rating: 4.5, count: 1945 }
}];

function getProducts(){
    var data = products.filter(function(element,index){


        return element.brand == "Apple";
    });
    console.log(data);
    
};

getProducts()