const { sequelize } = require("../db-config/postgres_connection");
const { sendSuccessResponse, sendErrorResponse } = require("../utils/response_handler");


const listProductByCategoryUsingRawQuery = async (req, res) => {
    try {
        const [products, metadata] = await sequelize.query(
            `select p.product_id as product_id,p.product_name as product_name,
            c.category_name as category_name ,c.sku_code as sku_code
            from products as p inner join categories as c on
            p.product_id=c.product_id
            `
        );

        return sendSuccessResponse(res, 200, "Products retrieved successfully", products);
    }
    catch (error) {
        console.error(error.message);
        return sendErrorResponse(res, 500, error.message);
    }
}

module.exports = {
    listProductByCategoryUsingRawQuery
}