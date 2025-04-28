const product = { name: "Laptop", price: 1000, brand: "Dell" }; 

for (let [productKey, value] of Object.entries(product)) {
  console.log( productKey + ": " + value)
}

