const express = require("express");
const router = express.Router();

// Require controller
const npoController = require("../controllers/npoController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post("/", npoController.create_npo);

router.get("/", npoController.read_npo_many);

router.get("/:id", npoController.read_npo);

router.put("/:id", npoController.update_npo);

router.delete("/:id", npoController.delete_npo);

module.exports = router;
