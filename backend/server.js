require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const connectDB = require('./config/db');

// INITIATE APP... Express yourself 🎶
const express = require('express');
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONNECT THE DATABASE
connectDB();


// DEFINING ROUTES
const trendsRouter = require('./routes/trends');
const postRoutes = require('./routes/post');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use('/users', usersRouter);
app.use('/trends', trendsRouter);
app.use('/', postRoutes);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
  });