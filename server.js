require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const itemRoutes = require("./src/routes/itemRoutes");
const categoryRoutes = require("./src/routes/CategoryRoutes"); // Import category routes
//const connectDB = require("./src/config/connectDB");
const connection = require('./src/db');
const cors = require("cors");

const app = express();

const port = 5000;



// Use CORS to allow requests from all origins
app.use(cors());


// Parse incoming JSON requests
app.use(express.json()); // This is necessary to parse JSON bodies

// Connect to MongoDB
//connectDB();

// Use routes for items and categories
app.use("/items", itemRoutes); // Item routes
app.use("/categories", categoryRoutes); // Category routes

// test api
app.get('/test',(req,res)=>{
  res.json({success:true,data:{

    mainData:[1,23,4],
    message:"Hey It's a test data"

  }})

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
