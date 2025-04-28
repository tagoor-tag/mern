var promiseObject = new Promise((resolve, reject) => {
    resolve([{ name: "sagar", phn: 9999999 }, { name: "aish", phn: 9999999 }]);

    reject({
        ok: false,
        error: "Something went Wrong"
    })
});

// console.log(promiseObject);

// Success Data 

promiseObject.then((successdata) => {
    console.log("Success Data");
    console.log(successdata);
}).catch((errordata) => {
    console.log("Error Data");
    console.log(errordata);
})