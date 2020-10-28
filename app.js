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
app.get("/api/mercenary", async (req, res) => {
  const docRef = db.collection('mercenary');
  const mercenaries = await docRef.get();
  const mercResponse = [];
  mercenaries.forEach((mercenary) => {
    mercResponse.push(mercenary.data());
  });
  res.status(200).send(mercResponse);
});

// post sample
app.post("/api/mercenary", async (req, res) => {
  const { name, description, cost } = req.body;
  const docRef = db.collection('mercenary').doc(name);

  await docRef.set({
    name,
    description,
    cost,
  });
  res.sendStatus(200);
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
