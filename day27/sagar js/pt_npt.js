//Difference between primitive data and non-primitive data

//frist point 
// var x = 10;  //Pt is single data

// var a = [10,20,"tagoor"]; //NPT is storing multiple data

//second point

//pt is stored stack memory

//npt is stored in heap memory

//thrid point 

//pt values are immutable (cannot be changed)

// var name = "raj";
//                 //repalcement
// name = "rohan"


//npt values are mutable (can be changed)


// var data = { name: "raj"};
//                 //modifing the object value
// data.name = "rohan"



//forth point 

//pt is compare values

var x = 10;

var y = 10;

console.log(x == y);

console.log(x === y);


console.log("------------------------------------");

//npt is compare by address of object when calling object name 

var a = { name: "sagar" };

var b = { name: "sagar" };


console.log(a == b);

console.log(a === b);
