const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({


    headline: String,
    url: String


});

module.exports = mongoose.model('History', historySchema)