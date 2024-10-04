const Product = require("../models/product");
const { sendSuccessResponse, sendErrorResponse } = require("../utils/response_handler");


/**
 * @description     Create a new product
 * @param {*} req   POST /api/product
 * @param {*} res 
 * @returns         Product created response data
 */

const createProduct = async (req, res) => {
    try {

        const product = await Product.create(req.body);

        //use toJSON() to remove sequelize clutter
        console.log(product.toJSON());
        return sendSuccessResponse(res, 200, "Product created successfully", product.toJSON());
    }
    catch (error) {
        console.error(error);
        return sendErrorResponse(res, 500, error.message);
    }
}

module.exports = {
    createProduct
}