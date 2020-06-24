const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourcesSchema = new Schema({
  heading: { type: String, required: true },
  catagory: { type: String, required: true },
  subtitle: String,
  body1: String,
  body2: String,
  rating: Number,
  link: String,
  date: { type: Date, default: Date.now }
});

const Resources = mongoose.model("resources", resourcesSchema);

module.exports = Resources;