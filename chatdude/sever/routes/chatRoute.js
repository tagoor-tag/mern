const express =  require('express');
const verifyToken = require('../middleware/verifyToken');
const Chat = require('../model/chatSchema');
const Mongoose = require('mongoose')
const ObjectId = Mongoose.Types.ObjectId


const route = express.Router();


route.get('/get-users-chats',verifyToken, async (req,res)=>{

    try{
        const userId = req.userdata.data._id;

        const chatData = await Chat.find({
            members: { $in: [new ObjectId(userId)] }
        });
        if (chatData.length === 0) {
            return res.send({
              ok: true,
              results: "No chats found"
            });
          }else{

              res.send({
                  ok: true ,
                  results: chatData
              })
        } 
    }
    catch(error){
        res.send({
            ok : false ,
            error: error,
        })
    }
})//http://localhost:1010/api/chats/get-users-chats

route.post("/create-chat",verifyToken, async(req, res)=>{
    try{
        console.log(req.body)
        const startChat = await Chat.insertOne({members :[ new ObjectId(req.userdata.data._id), new ObjectId(req.body.id)], messageCount: 0})
        res.send({
            ok : true,
            results : `User ready to chat with ${req.body.first}`
        })
    }
    catch(error){
        res.send({
            ok : false,
            error : error
        })
    }

})//http://localhost:1010/api/chats/create-chat


module.exports = route