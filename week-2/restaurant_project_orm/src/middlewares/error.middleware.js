const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    code: statusCode,
    message: err.message || "Internal Server Error",
    details: err.message
  });
};

module.exports = errorHandler;
