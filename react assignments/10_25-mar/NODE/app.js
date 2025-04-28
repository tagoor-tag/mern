const express = require('express');
const cors = require('cors');
const createConnection = require('./config/createConnection');
var First = require('./model/firstSchema')

const app = express()


app.use(cors());
app.use(express.json());



app.post("/api/post",(req,res)=>{
    const user = req.body;

    First.find().then((data)=>{
        console.log(data)
        res.send({
            ok:true,
            message: "successfull find user",
            results: data,
        })
    }).catch((error)=>{
        console.log(error);
        res.send({
            ok: false,
            message:"falied to fetch data",
            results: null
        })
    })


    
})



app.listen(5656,()=>{
    createConnection();
    console.log("sever is started")
})