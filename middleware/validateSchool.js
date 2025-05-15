const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const validateSchool = [
  body("schoolname")
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("School name must contain between 1 and 50 characters.")
];

module.exports = validateSchool;