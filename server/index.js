const express = require("express");
const cors = require("cors"); // Add this if you're running React and Express on different ports
const app = express();
const pool = require("./db");
require('dotenv').config();
const PORT = process.env.PORT ;

// Use CORS if needed
app.use(cors());

// Sample data for templates
const templates = [
  { id: 1, title: "Template 1", src: "path/to/image1.jpg" },
  { id: 2, title: "Template 2", src: "path/to/image2.jpg" },
  { id: 3, title: "Template 3", src: "path/to/image2.jpg" },
  { id: 4, title: "Template 4", src: "path/to/image2.jpg" },

];

//Database Connection

pool.connect((req, res) => {
  console.log("Database Connection Successful");
  
})

app.get("/", (req, res) => {
  res.send("Hello World");
});
// Define the /api/templates route
app.get("/api/templates", (req, res) => {
  res.json(templates);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
