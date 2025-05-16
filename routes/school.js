const express = require("express");
const router = express.Router();

// Require controller
const schoolController = require("../controllers/schoolController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post("/", schoolController.create_school);

router.get("/", schoolController.read_school_many);

router.get("/:id", schoolController.read_school);

router.put("/:id", schoolController.update_school);

router.delete("/:id", schoolController.delete_school);

module.exports = router;
