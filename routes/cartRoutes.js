const express = require("express");
const router = express.Router();

const controller = require("../controllers/cartController");
const { validateBody } = require("../middlewares/validate");

router.get("/", controller.getCart);
router.post("/", validateBody(["productId", "quantity"]), controller.addToCart);

module.exports = router;