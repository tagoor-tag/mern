var input = ["apple", "banana", "apple", "orange", "banana"];

let count = [] ;
input.forEach(function(element,index){
   count[element] = (count[element]  || 0) +1;
})

console.log(count);
