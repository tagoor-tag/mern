var input = ["cat", "elephant", "dog", "rhinoceros"];

var output = input.filter(function(element , index){
    return element.length > 5;
})

console.log(output);
