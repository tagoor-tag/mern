var input = [{ name: "John", marks: 45 },
{ name: "Jane", marks: 35 },
{ name: "Jack", marks: 50 }];

var output = input.map(function (element, index) {
    return element.marks >= 40 ? { name : element.name, marks : element.marks , status :element.status= "pass"} : { name : element.name, marks : element.marks , status :element.status= "fail"} ;


})

console.log(output);
