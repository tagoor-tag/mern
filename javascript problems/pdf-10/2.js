let promise = new Promise((resolve, reject) =>{
                resolve((a , b)=>{
                    return a + b;
                })
})

promise.then((add)=>{
    console.log(add(15 , 15));
})