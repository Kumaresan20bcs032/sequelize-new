const Product = require("../models/product");

const { sendSuccessResponse, sendErrorResponse } = require("../utils/response_handler");

/**
 * @description     Listing all products and its related category
 * @param {*} req   GET /api/product/list
 * @param {*} res 
 */
const listProductAndItsCategory = async (req, res) => {
    try {
        const products = await Product.findAll(
            {
                include: [{
                    association: 'categories',
                    separate: true
                }],
            }
        );
        return sendSuccessResponse(res, 200, "Products retrieved successfully", products);
    }
    catch (error) {
        console.error(error);
        return sendErrorResponse(res, 500, error.message);
    }
}

module.exports = {
    listProductAndItsCategory
}

