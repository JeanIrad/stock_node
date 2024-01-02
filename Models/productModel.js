const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " A product must have a name"],
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: Number,
  featured: Boolean,
  expireDate: Date,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
