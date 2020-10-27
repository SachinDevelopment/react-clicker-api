const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const port = 5000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
// get sample
app.get("/api/colors", async (req, res) => {
  res.send([
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ]);
});

// post sample
app.post("/parth", async (req, res) => {
  console.log('printing out body', req.body);
  res.sendStatus(200);
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
