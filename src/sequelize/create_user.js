const User = require("../models/user");
const { sendSuccessResponse, sendErrorResponse } = require("../utils/response_handler");

/**
 * @description     Create a user
 * @param {*} req POST /api/user
 * @param {*} res 
 */
const createUser = async (req, res) => {
    try {

        const user = await User.create(req.body);

        //use toJSON() to remove sequelize clutter
        console.log(user.toJSON());
        return sendSuccessResponse(res, 200, "User created successfully", user.toJSON());
    }
    catch (error) {
        console.error(error);
        return sendErrorResponse(res, 500, error.message);
    }
}

module.exports = {
    createUser
}