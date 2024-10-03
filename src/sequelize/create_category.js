const Category = require("../models/category");
const { sendSuccessResponse, sendErrorResponse } = require("../utils/response_handler");

/**
 * @description     Create a new category
 * @param {*} req   POST /api/category
 * @param {*} res 
 * @returns         Category created response data
 */
const createCategory = async (req, res) => {
    try {

        const category = await Category.create({
            product_id: 1,
            category_name: "oxford",
            sku_code: "PRD0001"
        })


        //use toJSON() to remove sequelize clutter
        console.log(category.toJSON());
        return sendSuccessResponse(res, 200, "Category successfully created", category.toJSON());
    }
    catch (error) {
        console.error(error);
        return sendErrorResponse(res, 500, error.message);
    }
}

module.exports = {
    createCategory
}