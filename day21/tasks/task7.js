// You have an array of objects representing items, each with name and price properties. 
// Use filter to create a new array containing only the items that cost less than $10.

var data = [
    { name: "Book", price: 12 },
    { name: "Pen", price: 2 },
    { name: "Notebook", price: 5 },
    { name: "Backpack", price: 20 }
    ];

    var a = data.filter(function(element, index , data ){
       
        if(element.price < 10){
            return element;
        }
    
    })
    
    console.log(a);