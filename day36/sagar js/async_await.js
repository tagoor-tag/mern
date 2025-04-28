function createPromise() {
    var promiseObject = new Promise((resolve, reject) => {
        resolve([{ name: "tagoor", phn: 9999999 }, { name: "aish", phn: 9999999 }]);
        // reject([{ name: "sagar", phn: 9999999 }, { name: "aish", phn: 9999999 }]);

    });

    return promiseObject;
}


// async function myfun() {

//     // Note: Inside the Async function only we can use await Operator

//     //Note: Await Operator is used with the function which returns Promsie object
//    let data = await createPromise(); // function should return promise
//    console.log(data);

// }

// myfun();

async function handleErrorPromise() {
    try {
        var res = await createPromise();
        console.log("try block");
        console.log(res);

    } catch (error) {
        console.log("error block");
        console.log(error);
    };

};

handleErrorPromise();