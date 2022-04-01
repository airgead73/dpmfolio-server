const { isDev } = require('../config/env');

const errorHandler = (err, req, res, next) => {  
  const statusCode = err.status || res.statusCode || 500;
  let message = '';

  // set error message

  switch(statusCode) {
    case 500:
      message = "System Error";
      break;
    case 401:
      message = "You are not authorized.";
      break;
    case 404:
      message = "Resource not found";
      break;
    default:
      message = err.message
  }

  res.status(statusCode).json({
    error: true,
    message,
    stack: isDev ? err.stack : null
  });
}

module.exports = errorHandler;
