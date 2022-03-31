const { connectDB } = require('./config.db');
const { limiter, sessionConfig } = require('./config.session');

module.exports = {
  connectDB,
  limiter,
  sessionConfig
}