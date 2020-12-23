require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3001;

// Express yourself 🎶
const express = require('express');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect the Database 
connectDB();


// Defining Routes
const entryRouter = require('./routes/entry');
const usersRouter = require('./routes/users');
const trendsRouter = require('./routes/trends');

app.use('/history', entryRouter);
app.use('/users', usersRouter);
app.use('/trends', trendsRouter);


// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
  });