const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');
console.log(process.env.MONGOURI)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('MongoDB is now connected!');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;