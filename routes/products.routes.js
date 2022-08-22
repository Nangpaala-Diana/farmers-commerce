const express = require("express");
const { getCurrentPath } = require("yam/lib/utils/config-utils");

const {
  addProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
} = require("../controllers/products.controller");

const router = express.Router();

router.get("/", getAllProducts);
router.post("/add", addProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);

module.exports = router;
