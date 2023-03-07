const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: [true, "A productId must be have Number"],
    unique: true,
  },
  quantity: {
    type: Number,
    required: [true, "A quantity must have a Number"],
  },
  operation: {
    type: String,
    required: [true, "A operation must have a String"],
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
