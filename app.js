const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const port = 5000;

app.use(bodyParser.json());

// get sample
app.get("/api", async (req, res) => {
  res.send("Hello World!");
});

// post sample
app.post("/parth", async (req, res) => {
  console.log('printing out body', req.body);
  res.sendStatus(200);
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
