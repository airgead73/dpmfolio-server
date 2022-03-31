const asyncHandler = require('express-async-handler');

/**
 * @desc Create author
 * @route POST /api/authors
 * @access Private
 */

exports.create = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: "POST: author"
    });

});

/**
 * @desc Read authors
 * @route GET /api/authors
 * @access Private
 */

 exports.read = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: "GET: authors"
    });

});

/**
 * @desc Read author detail
 * @route GET /api/authors/:id
 * @access Private
 */

 exports.detail = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: "GET: author detail"
    });

});

/**
 * @desc Update author
 * @route PUT /api/authors/:id
 * @access Private
 */

 exports.update = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: "PUT: author"
    });

});

/**
 * @desc Delete author
 * @route PUT /api/authors/:id
 * @access Private
 */

 exports.remove = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: "DELETE: author"
    });

});