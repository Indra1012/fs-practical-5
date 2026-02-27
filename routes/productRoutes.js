const express = require("express");
const router = express.Router();

const controller = require("../controllers/productController");
const { validateBody } = require("../middlewares/validate");

router.get("/", controller.getProducts);
router.post("/", validateBody(["name", "price"]), controller.createProduct);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router;