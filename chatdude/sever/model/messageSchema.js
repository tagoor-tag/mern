var mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  message: { type: String, default: 0 },
});

const Message = mongoose.model("messages", messageSchema);

module.exports = Message;
