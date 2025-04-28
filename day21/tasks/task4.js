// Write a function that takes an array of numbers and uses filter to return a new array containing only the numbers less then 5.

var data = [1, 2, 3, 4, 5, 6];

var a = data.filter(function(element,index){

    return element < 5;    //here returm the value to new array and element is the value that means element is less than 5 we calling

});

console.log(a);
