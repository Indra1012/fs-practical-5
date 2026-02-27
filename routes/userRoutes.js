const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const { validateBody } = require("../middlewares/validate");

router.get("/", controller.getUsers);
router.post("/", validateBody(["name", "email"]), controller.createUser);

module.exports = router;