var product = {
    pName : "iphone",
    price: 80000,
    radting : 4.5,
    instock : true,
};
console.log(product);


delete product.radting; //dotnoation to delete data in object
delete product["instock"];//square barses for delete data in object


console.log(product);
