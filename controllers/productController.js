const Product = require("../models/productModel");

//middleware check for the creating product
exports.checkBody = (req, res, next) => {
  if (!req.body.productId || !req.body.operation) {
    return res.status(400).json({
      status: "faild",
      message: "Missing the productid and operation",
    });
  }
  next();
};

//add

exports.addProduct = async (req, res) => {
  try {
    const newProduct = Product.create(req.body);
    res.status(201).json({
      status: "successfully added",
      data: {
        newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      data: {
        err,
      },
    });
  }
};

//remove the product
exports.deleteProduct = async (req, res) => {
  try {
    const Product = await Product.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        Product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      data: {
        err,
      },
    });
  }
};
