const asyncHandler = require('express-async-handler');

/**
 * @desc Create item
 * @route POST /api/items
 * @access Private
 */

exports.create = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: "POST: item"
    });

});

/**
 * @desc Read items
 * @route GET /api/items
 * @access Private
 */

 exports.read = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: "GET: items"
    });

});

/**
 * @desc Read item detail
 * @route GET /api/items/:id
 * @access Private
 */

 exports.detail = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: "GET: item detail"
    });

});

/**
 * @desc Update item
 * @route PUT /api/items/:id
 * @access Private
 */

 exports.update = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: "PUT: item"
    });

});

/**
 * @desc Delete item
 * @route PUT /api/items/:id
 * @access Private
 */

 exports.remove = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: "DELETE: item"
    });

});