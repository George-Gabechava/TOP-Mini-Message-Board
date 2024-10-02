// app.js
const express = require("express");
const path = require("node:path");
const app = express();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { links: links, message: "It's About time." });
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});

app.listen(3000, function () {
  console.log(`App listening on port 3000!`);
});