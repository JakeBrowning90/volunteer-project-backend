const express = require("express");
const router = express.Router();
const passport = require("passport");

// Require controller
const userController = require("../controllers/userController");

// Routes
router.post("/", userController.create_user);

router.get("/", userController.read_user_many);

router.get("/:id", userController.read_user_one);

router.put("/:id", userController.update_user);

router.delete("/:id", userController.delete_user);

// Login
router.post(
    "/login",
    passport.authenticate("local", {
      session: false,
    }),
    userController.user_login
  );

module.exports = router;
