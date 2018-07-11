var express = require("express");
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({entended: false});
var app = express();

var mang = ["hello", "hi", "Khanh DOng"];
app.post("/list-note", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).send(mang);
});

app.post("/add", parser, function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var newNote = req.body.note;
  mang.push(newNote);
  res.send(mang);
});

app.post("/delete", parser, function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var id = req.body.id;
  mang.splice(id, 1);
  res.send(mang);
});

app.post("/edit", parser, function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var id = req.body.id;
  var value = req.body.value;
  mang[id] = value;
  res.send(mang);
});

var server = app.listen(8888, function () {
  console.log("app running on port.", server.address().port);
});
