const express = require("express");

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// CREATE
router.post("/addproduct", createProduct);

// READ ALL
router.post("/addProduct", createProduct);

// READ ONE
router.get("/getProduct:id", getProduct);

// UPDATE
router.put("/updateProduct:id", updateProduct);

// DELETE
router.delete("/deleteProduct:id", deleteProduct);

module.exports = router;