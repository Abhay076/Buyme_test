const express = require("express");

const productControllers = require("../controllers/productController");
const router = express.Router();

router.route("/").post(productControllers.checkBody, productControllers.addProduct);

router.route("/:id").delete(productControllers.deleteProduct);

module.exports = router;
