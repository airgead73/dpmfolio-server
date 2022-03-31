const { Router } = require('express');
const itemRouter = Router();

// controllers
const { create, read, detail, update, remove } = require('./item.controller');

// routes
itemRouter.route('/').get(read).post(create);
itemRouter.route('/:id').get(detail).put(update).delete(remove);

// export
module.exports = itemRouter;