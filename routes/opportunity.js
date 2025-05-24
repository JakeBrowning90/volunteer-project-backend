const express = require("express");
const router = express.Router();

// Require controller
const opportunityController = require("../controllers/opportunityController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post("/", opportunityController.create_opportunity);

router.get("/", opportunityController.read_opportunity_many);

router.get("/:id", opportunityController.read_opportunity);

router.put("/:id", opportunityController.update_opportunity);

router.delete("/:id", opportunityController.delete_opportunity);

module.exports = router;
