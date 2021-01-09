const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  body: {
    type: String,
  },
});

module.exports = mongoose.model('Post', postSchema)
