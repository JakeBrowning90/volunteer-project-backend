const asyncHandler = require("express-async-handler");

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_school = asyncHandler(async (req, res, next) => {
  res.json("School created");
});

exports.read_school = asyncHandler(async (req, res, next) => {
  res.json("School read");
});

exports.update_school = asyncHandler(async (req, res, next) => {
  res.json("School updated");
});

exports.delete_school = asyncHandler(async (req, res, next) => {
  res.json("School deleted");
});
