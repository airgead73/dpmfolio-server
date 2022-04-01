const { Router } = require('express');
const apiRouter = Router();
const { authorRouter } = require('../units/authors');
const { bookRouter } = require('../units/books');
const { itemRouter } = require('../units/items');
const { checkJwt } = require('../middleware')

apiRouter.use('/authors', authorRouter);
apiRouter.use('/books', checkJwt, bookRouter);
apiRouter.use('/items', itemRouter)

module.exports = apiRouter;