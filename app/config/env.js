const isDev = process.env.NODE_ENV === 'development';

/* AUTH */
const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
const clientOriginUrl = process.env.CLIENT_ORIGIN_URL;
const clientOrigins = [clientOriginUrl]

/* DB */
const mongoUri = process.env.MONGO_URI;

/* SESSION */
const rateLimit = process.env.RATE_LIMIT;
const sessionSecret = process.env.SESSION_SECRET;
const sessionExp = process.env.SESSION_EXP;

/* check variables */
if(!audience) {
  throw new Error(".env is missing AUTH0_AUDIENCE variable.")
}

if(!clientOrigins) {
  throw new Error(".env is missing CLIENT_ORIGIN_URL variable.")
}

if(!clientOriginUrl) {
  throw new Error(".env is missing CLIENT_ORIGIN_URL variable.")
}

if(!domain) {
  throw new Error(".env is missing AUTH0_DOMAIN variable.")
}

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
  audience,
  clientOrgins,
  clientOriginUrl,
  domain,
  isDev,
  mongoUri,
  rateLimit,
  sessionSecret,
  sessionExp
}