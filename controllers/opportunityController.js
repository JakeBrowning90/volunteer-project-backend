require("dotenv").config();
const asyncHandler = require("express-async-handler");
// const validateOpportunity = require("../middleware/validateNPO");
const { validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.opportunity = [
  // validateOpportunity,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      await prisma.opportunity.create({
        data: {
          title: req.body.title,
          description: req.body.description,
          npo: { connect: { id: parseInt(req.body.npo) } },
        },
      });
    }
    res.json("Opportunity created");
  }),
];

exports.read_opportunity_many = asyncHandler(async (req, res, next) => {
  const adminId = parseInt(req.query.adminId);
  const foundNPOs = await prisma.opportunity.findMany({
    orderBy: [{ nponame: "asc" }],
    where: {
      admin: {
        some: { id: adminId },
      },
    },
  });
  res.json(foundNPOs);
});

exports.read_opportunity = asyncHandler(async (req, res, next) => {
  res.json("Opportunity read");
});

exports.update_opportunity = asyncHandler(async (req, res, next) => {
  res.json("Opportunity updated");
});

exports.delete_opportunity = asyncHandler(async (req, res, next) => {
  res.json("Opportunity deleted");
});
