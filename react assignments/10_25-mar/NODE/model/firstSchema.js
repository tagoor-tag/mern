var mongoose = require('mongoose');

var FirstSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
    },
    cityName:{
        type: String,
    },
    emailId:{
        type: String,
        require: true,
    },
    age:{
        type: Number,
        min:18,
    }
})

var First = mongoose.model("first",FirstSchema)

module.exports = First;