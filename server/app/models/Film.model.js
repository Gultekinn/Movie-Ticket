const mongoose = require("mongoose");
const Film = mongoose.model(
  "Film",
  new mongoose.Schema(
    {
      filmType: Array,
      mainimage: String,
      video: String,
      date: String,
      age: Number,
      time: String,
      languageType: Array,
      price: Number,

    },
    {
      timestamps: true,
    }
  )
);
module.exports = { Film };
