const express = require("express");
const router = express.Router();

// Require controller
const shiftController = require("../controllers/shiftController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post("/", shiftController.create_shift);

router.get("/", shiftController.read_shift_many);

router.get("/user/:id", shiftController.read_shift_user);

router.get("/:id", shiftController.read_shift_one);

router.put("/:id", shiftController.update_shift);

router.delete("/:id", shiftController.delete_shift);

module.exports = router;
