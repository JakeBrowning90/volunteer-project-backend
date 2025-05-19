const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// TODO: confirm user has NPO admin role
const validateNPO = [
  body("nponame")
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("NPO name must contain between 1 and 50 characters."),
];

module.exports = validateNPO;
