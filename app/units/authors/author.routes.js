const { Router } = require('express');
const authorRouter = Router();

// controllers
const { create, read, detail, update, remove } = require('./author.controller');

// routes
authorRouter.route('/').get(read).post(create);
authorRouter.route('/').get(detail).put(update).delete(remove);

// export
module.exports = authorRouter;