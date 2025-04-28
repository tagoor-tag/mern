var promiseObject = new Promise((resolve, reject) => {
    // reject("xyz");
    // reject(100);
    // reject(true);
    // reject({name: "sagar", phn:9999999});
    // reject([10,20,30,40]);
    reject([{name: "sagar", phn:9999999},{name: "aish", phn:9999999}]);

});

console.log(promiseObject);
