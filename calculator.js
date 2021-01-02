const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1 + num2;

  res.send("The result of the calculation is " + result)
})

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/bmicalculator", (req, res) => {
  var h = parseFloat(req.body.height);
  var w = parseFloat(req.body.weight);
  var bm = w / (h * h);

  res.send("your BMI is " + bm + "n");
})

app.listen(port, () => {
  console.log("Server started on port 3000")
})
