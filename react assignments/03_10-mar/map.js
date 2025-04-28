var fruits = ["apple", "banana", "cherry"];

let newFruits = fruits.map((element)=>{
    return element + '-fruit';
})

console.log(newFruits);


console.log("----------------------------------------------------------");

var data = [100, 200, 300];

var discountPrice = data.map((element)=>{
                return element = element - (element * (10/100))
})


console.log(discountPrice);



console.log("----------------------------------------------------------");

var input = [0, 25, 100];

var covertValue = input.map((element)=>{
        return (element * (9/5)) + 32;
})

console.log(covertValue);


console.log("----------------------------------------------------------");
var input = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Jane", lastName: "Smith" }
    ]

var changeData = input.map((element)=>{
    return {id : element.id , fullname : element.firstName +" "+ element.lastName};
})

console.log(changeData);


console.log("----------------------------------------------------------");

var input =  [1, 2, 3, 4, 5];

var output = input.map((element)=>{
    return element % 2 == 0 ? element * 2 : element *3; 
})

console.log(output);