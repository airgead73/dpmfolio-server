/**
 * external imports
 */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
/**
 * internal imports
 */

/**
 * variables
 */
const client = process.env.NODE_ENV === "development" ? 'build' : 'public';
console.log(client)

/**
 * app activation
 */
const app = express();

/**
 * middleware
 */

 app.use(express.static(path.join(__dirname, client)));
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(cookieParser());
/**
 * dev middleware
 */

/**
 * locals
 */

/**
 * routes
 */

/**
 * error handling
 */
 app.use(function(req, res, next) {
  const error = new Error('Path not found');
  error.status = 404;
  next(error);
});

/**
 * export
 */

module.exports = app;