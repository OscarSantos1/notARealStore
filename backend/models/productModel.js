const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    _id: Number,
    name: String,
    sex: String,
    type: String,
    color: String,
    price: Number,
    mainImg: String,
    images: [String],
    views: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
