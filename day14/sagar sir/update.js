var product = {
    pName : "iphone",
    price: 80000,
    radting : 4.5,
    instock : true,
};
console.log(product);
product.price = 90000; //dotnoation to update in object
product["instock"] =false ;//square barses for update data in object
console.log(product);

