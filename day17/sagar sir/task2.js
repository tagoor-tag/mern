var info = [10,20,30,40,50 ,"raj"]

var a = info.map(function(element, index){
    var b = element * 10;
    return b;
})

console.log(a);

info.forEach(function(element,index){
    console.log(element * 10);
})