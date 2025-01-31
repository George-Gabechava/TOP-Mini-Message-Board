// controller.js
const db = require("../db/queries");

async function getNewMessage (req, res) {
  res.render("form"); 
};

async function postNewMessage (req, res) {
  const currentUser = req.body.currentUser;
  const currentMessage = req.body.currentMessage;
  messages.push({ text: currentMessage, user: currentUser, added: new Date() });
  res.redirect("/");
};

async function getDetails (req, res) {
  const messageIndex = req.params.id;
  const message = messages[messageIndex];
  res.render("details", { message });
};

async function getMessages (req, res) {
  res.render("index", { title: "Mini Message Board", messages: messages });
};

module.exports = {
  getNewMessage,
  postNewMessage,
  getDetails,
  getMessages
};