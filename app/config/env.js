const isDev = process.env.NODE_ENV === 'development';

/* DB */
const mongoUri = process.env.MONGO_URI;

/* SESSION */
const rateLimit = process.env.RATE_LIMIT;
const sessionSecret = process.env.SESSION_SECRET;
const sessionExp = process.env.SESSION_EXP;

/* check variables */
if(!mongoUri) {
  throw new Error(".env is missing MONGO_URI variable.")
}

if(!rateLimit) {
  throw new Error(".env is missing RATE_LIMIT variable.")
}

if(!sessionSecret) {
  throw new Error(".env is missing SESSION_SECRET variable.")
}

if(!sessionExp) {
  throw new Error(".env is missing SESSION_EXP variable.")
}

/* export */

module.exports = {
  isDev,
  mongoUri,
  rateLimit,
  sessionSecret,
  sessionExp
}