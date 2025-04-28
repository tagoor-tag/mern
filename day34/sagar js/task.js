// Create a JS function which return one array , 
// that should contain only two element



function fn() {
    var arr = ["Hello Dude",
        () => {
            console.log("We are not Practising ??? Y");
            
        }];
    return arr;

};

// var x = fn();
// x[1]();

var [x,y] = fn();
y()