const express = require("express");
const app = express();

//using for api
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

// using multi
app
  .get("/", (req, res) => {
    res.send("hello");
  })
  .get("/1", (req, res) => {
    res.send("1");
  });

//using router && controller
app.get("/2", hello);
app.get("/3", bye);

app.listen(8081);
