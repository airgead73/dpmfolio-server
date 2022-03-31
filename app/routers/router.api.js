const { Router } = require('express');
const apiRouter = Router();
const { authorRouter } = require('../units/authors');

apiRouter.use('/authors', authorRouter);

module.exports = apiRouter;