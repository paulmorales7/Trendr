require('dotenv').config();


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const connectDB = require('./config/db');
const PORT = process.env.PORT || 3001;

// Express yourself 🎶
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

// Connect the Database 
connectDB();


// Defining Routes



// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });