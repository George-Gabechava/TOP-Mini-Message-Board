// app.js
require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
const router = require("./routes/router");


// dot env config
const PORT = process.env._PORT || 5000;

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Set the views directory

// Serve static files like CSS
app.use(express.static(path.join(__dirname, "public")));

// Route for the homepage
app.use("/", router);

// Using this port number:
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

