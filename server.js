var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

var app = express();
var Port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "/public/")));

var jsonparser = bodyparser.json();
var urlencodedparser = bodyparser.urlencoded({ extended: false });

var public = path.join(__dirname, "/public/");
app.get("/", (req, res) => {
  res.sendfile(public + "/index.html");
});
app.get("/login", (req, res) => {
  res.sendFile(public + "html/login.html");
});
app.get("/signup", (req, res) => {
  res.sendFile(public + "html/signup.html");
});
app.get("/home", (req, res) => {
  res.sendFile(public + "html/home.html");
});
app.get("/send", (req, res) => {
  res.sendFile(public + "html/send.html");
});
app.get("/product", (req, res) => {
  res.sendFile(public + "/product.html");
});

app.listen(Port);
