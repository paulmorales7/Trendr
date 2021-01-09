const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Post', postSchema)
