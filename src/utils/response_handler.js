// configure and send success response.
const sendSuccessResponse = (res, statusCode, message, data) => {

    const response = {
        status: true,
        status_code: statusCode || 200,
        message,
        data: data || {}
    };

    res.status(statusCode).json(response);
}


// configure and send the error response.
const sendErrorResponse = (res, statusCode, message) => {

    const response = {
        status: true,
        status_code: statusCode || 500,
        message,
        data: {}
    };

    res.status(statusCode).json(response);
}

module.exports = {
    sendSuccessResponse,
    sendErrorResponse
}