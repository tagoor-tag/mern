let promise = new Promise((resolve, rejecrt ) =>{
             resolve("Hello, World!");
})

promise.then((message) => {
    console.log(message);
    
})

console.log(promise);
