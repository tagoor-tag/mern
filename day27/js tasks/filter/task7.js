var input =
[{ name: "Anna", age: 17 }, { name: "Mike", age: 20 }, { name: "Laura",
age: 16 }];

var output = input.filter(function(element, index){
    return element.age > 18;
})

console.log(output);

