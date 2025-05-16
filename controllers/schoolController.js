require("dotenv").config();
const asyncHandler = require("express-async-handler");
const validateSchool = require("../middleware/validateSchool");
const { validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// exports.function_name = asyncHandler(async(req, res, next) => {

// })

function generateCode() {
  let result = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

exports.create_school = [
  validateSchool,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      let code = generateCode();

      await prisma.school.create({
        data: {
          schoolname: req.body.schoolname,
          code: code,
          admin: { connect: { id: parseInt(req.body.admin) } },
        },
      });
    }
    res.json("School created");
  }),
];

exports.read_school_many = asyncHandler(async (req, res, next) => {
  const adminId = parseInt(req.query.adminId);
  const foundSchools = await prisma.school.findMany({
    orderBy: [{ schoolname: "asc" }],
    where: {
      admin: {
        some: { id: adminId },
      },
    },
  });
  res.json(foundSchools);
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
