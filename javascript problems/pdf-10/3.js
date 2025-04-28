let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Rejected after 3 seconds"), 3000);
})

let rejectMessage = promise.catch((message) =>{
    console.log(message);
    
})
