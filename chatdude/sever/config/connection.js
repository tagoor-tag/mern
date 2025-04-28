const mongoose = require("mongoose");

async function createConnection() {
  mongoose
    .connect("mongodb://localhost:27017/chatdudedb")
    .then(() => {
      console.log("connect")
       })
    .catch(() => {
      console.log('failed to connect')
    });
}

module.exports = createConnection;
