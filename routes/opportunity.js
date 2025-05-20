const express = require("express");
const router = express.Router();

// Require controller
const opportunityController = require("../controllers/npoController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post("/", opportunityController.create_npo);

router.get("/", opportunityController.read_npo_many);

router.get("/:id", opportunityController.read_npo);

router.put("/:id", opportunityController.update_npo);

router.delete("/:id", opportunityController.delete_npo);

module.exports = router;
