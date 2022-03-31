const { Router } = require('express');
const apiRouter = Router();
const { authorRouter } = require('../units/authors');
const { bookRouter } = require('../units/books');

apiRouter.use('/authors', authorRouter);
apiRouter.use('/books', bookRouter);

module.exports = apiRouter;