const asyncHandler = require("express-async-handler");

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_shift = asyncHandler(async (req, res, next) => {
  res.json("Create shift");
});

exports.read_shift_many = asyncHandler(async (req, res, next) => {
  res.json("Read many shifts");
});

exports.read_shift_one = asyncHandler(async (req, res, next) => {
  res.json("Read one shift");
});

exports.update_shift = asyncHandler(async (req, res, next) => {
  res.json("Update shift");
});

exports.delete_shift = asyncHandler(async (req, res, next) => {
  res.json("Delete shift");
});
