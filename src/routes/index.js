const express = require("express");
const { createProduct } = require("../sequelize/create_product");
const { createCategory } = require("../sequelize/create_category");

const router = express.Router();


router.post("/product", createProduct);
router.post("/category", createCategory);


module.exports = router;