// Given an  array of strings, use filter to create a new array containing only the strings that have more than 5 characters.

var data =  ["apple", "banana", "kiwi", "watermelon", "pear"];

var a = data.filter(function(element,index){
    return element.length > 5;
})
console.log(a);

