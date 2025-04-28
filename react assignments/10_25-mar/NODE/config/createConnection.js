const mongose = require('mongoose')

function createConnection(){
    mongose.connect('mongodb://localhost:27017/first')
    .then(()=>{})
    .catch((error)=>{
        console.log(error)
        console.log("failed to connect");
    })
}

module.exports = createConnection;