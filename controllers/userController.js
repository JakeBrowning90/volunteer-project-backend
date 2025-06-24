require("dotenv").config();
const asyncHandler = require("express-async-handler");
const validateUser = require("../middleware/validateUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_user = [
  validateUser,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      if (req.body.schoolCode) {
        await prisma.user.create({
          data: {
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role,
            school: { connect: { code: req.body.schoolCode } },
          },
        });
      } else {
        await prisma.user.create({
          data: {
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role,
          },
        });
      }

      res.json("Created user " + req.body.username);
    }
  }),
];

exports.read_user_many = asyncHandler(async (req, res, next) => {
  const query = req.query.username || "";
  const allUsers = await prisma.user.findMany({
    orderBy: [
      {
        username: "asc",
      },
    ],
    where: {
      username: {
        contains: query,
        mode: "insensitive",
      },
    },
  });
  res.json(allUsers);
});

exports.read_user_one = asyncHandler(async (req, res, next) => {
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
  res.json(user);
});

exports.update_user = [
  //   validateUserUpdate,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      const user = await prisma.user.update({
        where: { id: parseInt(req.params.id) },
        data: {
          // username: req.body.username,
          // password: req.body.password,
        },
      });
      res.json(user);
    }
  }),
];

exports.register_user =
  //   validateUserUpdate,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      const user = await prisma.user.update({
        where: { id: parseInt(req.params.id) },
        include: { opportunity: { select: { id: true, title: true } } },
        data: {
          // username: req.body.username,
          opportunity: { connect: { id: parseInt(req.body.oppId) } },
        },
      });
      console.log("Registered!");
      console.log(user);

      res.json(user);
    }
  });

exports.unregister_user =
  //   validateUserUpdate,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      const user = await prisma.user.update({
        where: { id: parseInt(req.params.id) },
        include: { opportunity: { select: { id: true, title: true } } },
        data: {
          // username: req.body.username,
          opportunity: { disconnect: { id: parseInt(req.body.oppId) } },
        },
      });
      console.log("Unregistered!");
      console.log(user);

      res.json(user);
    }
  });

exports.delete_user = asyncHandler(async (req, res, next) => {
  await prisma.user.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json("Deleted user");
});

// Login route
exports.user_login = asyncHandler(async (req, res, next) => {
  jwt.sign(
    { user: req.user },
    process.env.SECRET_KEY,
    { expiresIn: "15m" },
    (err, token) => {
      console.log(req.user);
      res.json({
        username: req.user.username,
        id: req.user.id,
        role: req.user.role,
        opportunity: req.user.opportunity,
        // Add "Bearer" on frontend
        token: token,
      });
    }
  );
});
