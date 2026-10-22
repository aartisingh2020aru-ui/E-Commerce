const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

// CREATE PRODUCT
router.post(
    "/products",
    upload.array("images", 5),
    createProduct
);

// GET ALL PRODUCTS
router.get("/products", getProducts);

// GET SINGLE PRODUCT
router.get("/products/:id", getProduct);

// UPDATE PRODUCT - Multer is required for image uploads
router.put(
    "/products/:id",
    upload.array("images", 5),
    updateProduct
);

// DELETE PRODUCT
router.delete("/products/:id", deleteProduct);

module.exports = router;