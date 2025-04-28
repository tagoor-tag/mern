var mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  messageCount: { type: Number, default: 0 },
});

const Chat = mongoose.model("chats", ChatSchema);

module.exports = Chat;

