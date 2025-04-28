const express = require("express");
const cors = require("cors");
const port = 1010;
const createConnection = require("./config/connection");


const app = express();
const UsersRoute = require("./routes/userRoute")
const ChatsRoute = require('./routes/chatRoute')

app.use(cors())
app.use(express.json())



app.use("/api/users", UsersRoute);//http://localhost:1010/api/users
app.use("/api/chats", ChatsRoute);//http://localhost:1010/api/chats


app.listen(port, () => {
  createConnection()
  console.log(`sever started and connected with db`);
});
