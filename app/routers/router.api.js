const { Router } = require('express');
const apiRouter = Router();
const { authorRouter } = require('../units/authors');
const { bookRouter } = require('../units/books');
const { itemRouter } = require('../units/items');

apiRouter.use('/authors', authorRouter);
apiRouter.use('/books', bookRouter);
apiRouter.use('/items', itemRouter)

module.exports = apiRouter;