const asyncHandler = require("express-async-handler");
// const validateUser = require("../middleware/validateUser");
const { PrismaClient } = require("@prisma/client");

const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_user = [
  //   validateUser,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    //  const errors = validationResult(req);
    //  if (!errors.isEmpty()) {
    //    res.json(errors);
    //  } else {

    //  }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
      },
    });

    res.json("Created user " + req.body.username);
  }),
];

exports.read_user_many = asyncHandler(async (req, res, next) => {
  res.json("Read many users");
});

exports.read_user_one = asyncHandler(async (req, res, next) => {
  res.json("Read one user");
});

exports.update_user = asyncHandler(async (req, res, next) => {
  res.json("Update user");
});

exports.delete_user = asyncHandler(async (req, res, next) => {
  res.json("Delete user");
});
