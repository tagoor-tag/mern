const express = require("express")
const port = 1212;
const app = express();
const jwt = require("jsonwebtoken")
const pass_key = "qwertyuiopasdfghjjklkzxcvbnmasdfghjkl";
const fs = require("fs")
const cors = require("cors");

app.use(express());
app.use(cors())
app.use(express.json())

app.get("/getfile",(req,res)=>{
    
        fs.writeFile("dummy.txt","this some text",(error, data)=>{
            if(error){
                res.send("something went worng")
            }else {
                res.send("file created")
            }
        })
   
})


app.post("/postdata",(req, res)=>{

})

app.listen(port, ()=>{
    console.log("sever is started")
})