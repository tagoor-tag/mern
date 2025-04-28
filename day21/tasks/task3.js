//  You have an array of objects representing items in a shopping
//  cart, each with name and price properties.Use forEach to
//  calculate and return the total price of the items.
var data = [{ name: "Book", price: 10 }, { name: "Pen", price: 2 }, { name: "Notebook", price: 5 }];

var a =0;  // assign a varible to value of 0

data.forEach(function(element , index , data )
{
     a += element.price;    //use the opertar of += to which we want to sum of 
    
})
console.log(a);  // console in out of the forEach for want exate value  
