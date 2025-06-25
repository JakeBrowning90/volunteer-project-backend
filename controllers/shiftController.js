const asyncHandler = require("express-async-handler");
// const validateShift = require("../middleware/validateShift");
const { validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_shift = [
  // validateShift,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      await prisma.shift.create({
        data: {
          volunteer: { connect: { id: parseInt(req.body.user) } },
          opportunity: { connect: { id: parseInt(req.body.opp) } },
          starttime: req.body.starttime,
          length: req.body.length,
        },
      });
    }
    res.json("Created shift");
  }),
];

// Let users see log of shifts by user/opp/org?
exports.read_shift_many = asyncHandler(async (req, res, next) => {
  res.json("Read many shifts");
});

exports.read_shift_user = asyncHandler(async (req, res, next) => {
  const userId = parseInt(req.params.id);
  const user = await prisma.user.findUnique({
    where: { id: parseInt(req.params.id) },
    include: {
      school: {
        select: {
          id: true,
        },
      },
    },
  });
  const shifts = await prisma.shift.findMany({
    where: { volunteer: { some: { id: userId } } },
    include: {
      opportunity: {
        select: {
          title: true,
          id: true,
        },
      },
    },
  });

  res.json([user, shifts]);
});

exports.read_shift_one = asyncHandler(async (req, res, next) => {
  res.json("Read one shift");
});

// Let NPO Admins make corrections to shifts
exports.update_shift = asyncHandler(async (req, res, next) => {
  res.json("Update shift");
});

// Let NPO Admins make delete shifts
exports.delete_shift = asyncHandler(async (req, res, next) => {
  res.json("Delete shift");
});
