//import modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//export app
module.exports = app;

//app.listen
app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
