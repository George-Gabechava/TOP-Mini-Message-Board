const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));

// Example messages for the assignment
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
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
  let currentUser = req.body.currentUser;
  let currentMessage = req.body.currentMessage;
  messages.push({ text: currentMessage, user: currentUser, added: new Date() });
  res.redirect("/");
});
