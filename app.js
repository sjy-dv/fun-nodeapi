const express = require("express");
const app = express();

hello = (req, res) => {
  res.send("hello");
};

bye = (req, res) => {
  res.send("bye");
};

let url = ["/api/hello", "/api/bye"];
let api = [hello, bye];

for (let i = 0; i < 2; i++) {
  app.get(url[i], api[i]);
}

app.listen(8081);
