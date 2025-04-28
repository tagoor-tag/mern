var promiseObject = new Promise((resolve, reject) => {
    // resolve("xyz");
    // resolve(100);
    // resolve(true);
    // resolve({name: "sagar", phn:9999999});
    // resolve([10,20,30,40]);
    resolve([{name: "sagar", phn:9999999},{name: "aish", phn:9999999}])


});

console.log(promiseObject);
