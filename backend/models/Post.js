const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  headline: String,
  url: String
});

module.exports = mongoose.model('Post', postSchema)
