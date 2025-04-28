var  input= [1, 2, 3, 4, 5, 6];

var output = input.filter(function(element, index){
    return element%2 == 0;
})

console.log(output);
