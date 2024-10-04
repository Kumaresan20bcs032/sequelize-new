const express = require("express");
const { createProduct } = require("../sequelize/create_product");
const { createCategory } = require("../sequelize/create_category");
const { listProductAndItsCategory } = require("../sequelize/product_and_its_category");
const { listProductByCategoryUsingRawQuery } = require("../sequelize/product_by_category_list");

const router = express.Router();


router.post("/product", createProduct);
router.post("/category", createCategory);
router.get("/product/list", listProductAndItsCategory);
router.get("/product/raw-query/list", listProductByCategoryUsingRawQuery);

module.exports = router;