const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');
// const db = 'mongodb+srv://<username>:<password>@counselinghr1.i0va3.mongodb.net/heroku_j88qppm5?retryWrites=true&w=majority';
const db = process.env.MONGODB_URI || "mongodb://localhost:27017/healthcare";
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
