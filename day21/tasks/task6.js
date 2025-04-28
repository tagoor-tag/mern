// You have an array of objects representing people, each with name and age properties .
// Use filter to return anew array containing only the people who are 18 orolder.

var data =  [   { name: "Alice", age: 17 },   { name: "Bob", age: 25 },   { name: "Charlie", age: 16 } ,   { name: "Diana", age: 20 } ];

var a = data.filter(function(element, index , data ){
    if(element.age > 18){
        return element;
    }

})

console.log(a);
