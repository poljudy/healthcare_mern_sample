const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String },
  specialties: String,
  education: String,
  other: String,
  hours: String,
  img: String,
  link: String,
  rating: Number,
  therapist: {type: Boolean, default: true},
  date: { type: Date, default: Date.now }
});

const Staff = mongoose.model("staff", staffSchema);
// staff?

module.exports = Staff;