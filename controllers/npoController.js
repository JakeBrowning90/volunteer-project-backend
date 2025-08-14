require("dotenv").config();
const asyncHandler = require("express-async-handler");
const validateNPO = require("../middleware/validateNPO");
const { validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_npo = [
  validateNPO,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      await prisma.nPO.create({
        data: {
          nponame: req.body.nponame,
          admin: { connect: { id: parseInt(req.body.admin) } },
        },
      });
    }
    res.json("NPO created");
  }),
];

// Get list all NPOs where User is an Admin, and all Volunteers registered
exports.read_npo_many = asyncHandler(async (req, res, next) => {
  const adminId = parseInt(req.query.adminId);
  const foundNPOs = await prisma.nPO.findMany({
    orderBy: [{ nponame: "asc" }],
    where: {
      admin: {
        some: { id: adminId },
      },
    },
  });
  const registeredUsers = await prisma.user.findMany({
    orderBy: [{ username: "asc" }],

    where: {
      opportunity: {
        some: {
          npo: {
            some: {
              admin: {
                some: { id: adminId },
              },
            },
          },
        },
      },
    },
 
  });
  res.json([foundNPOs, registeredUsers]);
});

// Get list all NPOs where User is an Admin, and all Volunteers registered
exports.read_npo_new_shift = asyncHandler(async (req, res, next) => {
  const adminId = parseInt(req.query.adminId);
  const foundNPOs = await prisma.nPO.findMany({
    orderBy: [{ nponame: "asc" }],
    where: {
      admin: {
        some: { id: adminId },
      },
    },
  });
  const registeredUsers = await prisma.user.findMany({
    orderBy: [{ username: "asc" }],

    where: {
      opportunity: {
        some: {
          npo: {
            some: {
              admin: {
                some: { id: adminId },
              },
            },
          },
        },
      },
    },
 
  });
  console.log(registeredUsers)
  res.json([registeredUsers, foundNPOs]);
});

exports.read_npo = asyncHandler(async (req, res, next) => {
  const npo = await prisma.nPO.findUnique({
    include: {
      opportunity: {
        select: {
          title: true,
          description: true,
          id: true,
        },
      },
    },
    where: { id: parseInt(req.params.id) },
  });
  res.json(npo);
});

exports.update_npo = asyncHandler(async (req, res, next) => {
  res.json("NPO updated");
});

exports.delete_npo = asyncHandler(async (req, res, next) => {
  res.json("NPO deleted");
});
