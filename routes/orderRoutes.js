const express = require("express");
const router = express.Router();

const controller = require("../controllers/orderController");
const { validateBody } = require("../middlewares/validate");

router.get("/", controller.getOrders);
router.post("/", validateBody(["userId", "items"]), controller.createOrder);

module.exports = router;