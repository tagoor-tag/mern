//By usung forEach multiply each number by 2 in array

var data =[1,2,3,4];

data.forEach(function(Element, index, data)  //element is value of array ,index is indicates index value ,data is name of array to change
{
    data [ index ] = Element * 2;

    // console.log(data);  if here console here then it is in loop

})
console.log(data);   //out of forEach gives you exate value