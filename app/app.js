/**
 * external imports
 */
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');
/**
 * internal imports
 */
const { connectDB, limiter, sessionConfig } = require('./config');
const { errorHandler } = require('./middleware');
const { apiRouter } = require('./routers');
/**
 * variables
 */
const client = process.env.NODE_ENV === "development" ? 'build' : 'public';
const { clientOrigins } = require('./config/env');

/**
 * app activation
 */
const app = express();
connectDB();

/**
 * security
 */
app.use(helmet());
app.use(cors({ origin: clientOrigins }));

app.use(limiter);

/**
 * middleware
 */
 app.use(express.static(path.join(__dirname, client)));
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(cookieParser());
 app.use(session(sessionConfig));

/**
 * dev middleware
 */

/**
 * locals
 */

/**
 * routes
 */
app.use('/api', apiRouter);

/**
 * error handling
 */
 app.use(function(req, res, next) {
  const error = new Error('Path not found');
  error.status = 404;
  next(error);
});

app.use(errorHandler);

/**
 * export
 */

module.exports = app;