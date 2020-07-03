const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourcesSchema = new Schema({
  heading: String ,
  catagory: String ,
  subtitle: String,
  body1: String,
  body2: String,
  rating: Number,
  link: String,
  author: String,
  display: {type: Boolean},
  date: { type: Date, default: Date.now }
});

const Resources = mongoose.model("resources", resourcesSchema);

module.exports = Resources;