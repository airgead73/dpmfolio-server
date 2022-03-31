const isDev = process.env.NODE_ENV === 'development';

/* DB */
const mongoUri = process.env.MONGO_URI;

/* check variables */
if(!mongoUri) {
  throw new Error(".env is missing MONGO_URI variable.")
}

module.exports = {
  isDev,
  mongoUri
}