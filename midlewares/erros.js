module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error."

    res.status(err.statusCode).json({
        success: false,
        error: err, // just for development env
        stack: err.stack, // just for development env
        message: err.message
    });
}