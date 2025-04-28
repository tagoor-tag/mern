var input = [
{ 
    name: "Alice", age: 25 
},
{ 
    name: "Bob", age: 30 
},
{
    name: "Charlie", age: 35
}]

var output = input.map(function(element,index){
    return element.name;
})

console.log(output);

