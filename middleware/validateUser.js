const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const validateUser = [
  body("username")
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("Username must contain between 1 and 50 characters.")
    .custom(async (value) => {
      const existingUsername = await prisma.user.findUnique({
        where: {
          username: value,
        },
      });
      if (existingUsername) {
        throw new Error("Username already in use.");
      }
    }),
  body("password")
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage("Password must contain between 1 and 20 characters."),
  body("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("Typed passwords do not match."),
  body("role")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Role selection is required."),
  body("schoolCode")
    .trim()
    .custom(async (value, { req }) => {
      const validCode = await prisma.school.findUnique({
        where: {
          code: value,
        },
      });
      if (!validCode && req.body.role == "student") {
        throw new Error("Invalid code.");
      }
    }),
];

module.exports = validateUser;
