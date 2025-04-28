// Write a function that takes an array of objects and a name, and returns the object with the matching name

var data = [ { id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" } ];

    var a =  map(function(element,index){
        if(data[index].name = "Bob"){
            return data[index].name;
        }
    })

    console.log(a);
    