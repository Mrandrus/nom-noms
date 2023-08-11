const express = require("express");
const cors = require("cors");
const app = express();
const mySql = require("mysql2");
const fs = require("fs");

app.use(cors());
app.use(express.json());

const Router = express.Router();

let connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "JubJub2023!",
  database: "Nom_Noms",
});

const docPath = "C:/Users/Matt/Documents/RegionalReview.docx";
const docContent = fs.readFileSync(docPath);
//const insertQuery = "INSERT INTO Reviews (Restaurants, Reviews) VALUES(?,?)";
//const insertData = ["The Regional", docContent]
const getQuery = "SELECT * FROM Reviews"


connection.connect((err) => {
  if (!err) {
    console.log("Connected to Nom Noms database!");
  } else {
    console.log("Connection Error:", err);
  }
});

// try {
//   // connection.query(insertQuery, insertData, function (err, result) {
//     connection.query(getQuery, function (err, result) {
//     if (err) {
//       return console.error("error: " + err.message);
//     }
//     console.log('Document inserted successfully with ID:', result.insertId);
//   });
// } catch (e) {
//   console.log(e);
// }


// app.get("/message", (req, res) => {
//   res.json({
//     message: "Hello from server!",
//     messageTwo: "Hello from the server again!",
//   });
// });

// app.get("/jubjub", (req, res) => {
//   res.json("You know what it is");
// });

app.get("/reviews", (req, res) => {
  // Assuming you've already established the database connection
  const selectQuery = "SELECT Reviews FROM Reviews LIMIT 1";

  connection.query(selectQuery, (err, result) => {
    if (err) {
      console.error('Error retrieving reviews:', err);
      res.status(500).json({ error: 'An error occurred while retrieving reviews.' });
    } else {
      if (result.length > 0) {
        // Assuming Reviews column contains binary data of the document
        const firstReviewsBinary = result[0].Reviews;

        // Convert binary data to a suitable format (e.g., Base64 or other)
        const firstReviewsData = convertBinaryData(firstReviewsBinary);

        // Create a JSON object to send as a response
        const responseObject = {
          firstReviews: firstReviewsData,
        };

        // Send the JSON response
        res.json(responseObject);
      } else {
        res.json({ firstReviews: null }); // No reviews found
      }
    }
  });
});

// Function to convert binary data to a suitable format (e.g., Base64)
function convertBinaryData(binaryData) {
  // Convert binary data to Base64 or any other suitable format
  // For example, you can use Buffer.from(binaryData).toString('base64');
  return Buffer.from(binaryData).toString('base64'); // Replace with the actual conversion logic
}


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

connection.end((err) => {
  if (err) {
    console.error('Error closing database connection:', err);
  }
});