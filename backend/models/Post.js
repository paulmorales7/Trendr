const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  body: String,
});

module.exports = mongoose.model('Post', postSchema)
