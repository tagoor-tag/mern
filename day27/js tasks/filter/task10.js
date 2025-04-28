var input = [ 0, "Hello", false, null, 42, "", undefined,1209,true,null,"","tagoor",0,23 ];

var output = input.filter(function(element , index){
   return element;
})
console.log(output);


// function filterFalsyValues(arr){

//    return arr.filter(value => value)
// }

// console.log(filterFalsyValues([ 0, "Hello", false, null, 42, "", undefined ,1209,true,null,"","tagoor",0,23,]))
