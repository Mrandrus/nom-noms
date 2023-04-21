const express = require("express");
const cors = require("cors");
const app = express();
const mySql = require("mysql2");

app.use(cors());
app.use(express.json());

const Router = express.Router();

let connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "JubJub2023!",
  database: "Nom_Noms",
});

connection.connect((err) => {
  if (!err) {
    console.log("Connected to Nom Noms database!");
  } else {
    console.log("Connection Error:", err);
  }
});

try {
  connection.query("SELECT * FROM Reviews", function (err, result, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }
    console.log("Resultssssss", result);
  });
} catch (e) {
  console.log(e);
}

connection.end();

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/jubjub", (req, res) => {
  res.json("You know what it is");
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
