const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const port = 5000;
const cors = require('cors');
var firebase = require("firebase/firestore");
const admin = require('firebase-admin');

var serviceAccount = require("./keys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-clicker-a6919.firebaseio.com"
});
const db = admin.firestore();

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

  const docRef = db.collection('mercenary').collection('test').doc('test');

  await docRef.set({
    name: 'test',
    description: 'A beasty tree',
    cost: 50
  });
});

// post sample
app.post("/parth", async (req, res) => {
  console.log('printing out body', req.body);
  res.sendStatus(200);
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
