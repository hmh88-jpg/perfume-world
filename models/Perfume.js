const mongoose = require("mongoose");

const perfumeSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  rating: String,
  description: String
});

module.exports = mongoose.model("Perfume", perfumeSchema);
