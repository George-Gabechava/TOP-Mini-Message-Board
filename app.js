const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
const { body, validationResult } = require("express-validator");

// Example messages for the assignment
const messages = [
  {
    text: "Hello, please be nice on my website :)",
    user: "George",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Test",
    added: new Date()
  }
];

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Set the views directory

// Serve static files like CSS
app.use(express.static(path.join(__dirname, "public")));

// Route for the homepage
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

// Using this port number:
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// New message form
app.get("/new", (req, res) => {
  res.render("form"); 
});

app.post("/new", (req, res) => {
  const currentUser = req.body.currentUser;
  const currentMessage = req.body.currentMessage;
  messages.push({ text: currentMessage, user: currentUser, added: new Date() });
  res.redirect("/");
});

// Message Details Page
app.get("/details/:id", (req, res) => {
  const messageIndex = req.params.id;
  const message = messages[messageIndex];
  res.render("details", { message });
});
