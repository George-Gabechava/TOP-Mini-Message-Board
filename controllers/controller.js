// controller.js
const db = require("../db/queries");

async function getNewMessage (req, res) {
  res.render("form"); 
};

async function postNewMessage (req, res) {
  const currentUser = req.body.currentUser;
  const currentMessage = req.body.currentMessage;
  await db.insertMessage(currentUser, currentMessage);
  res.redirect("/");
};

async function getDetails (req, res) {
  const messageIndex = req.params.id;
  const message = await db.getMessageById(messageIndex);

  if (!message) {
    return res.status(404).send("Message not found");
  }
  
  res.render("details", { message });
};

async function getMessages (req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages: messages });
};

module.exports = {
  getNewMessage,
  postNewMessage,
  getDetails,
  getMessages
};