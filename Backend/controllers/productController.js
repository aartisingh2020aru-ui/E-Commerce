

const Product = require("../models/Product");

// ============================================
// CREATE PRODUCTS
// Post /api/products
// ============================================

const createProduct = async (req, res) => {
  try {
    console.log("Product body:", req.body);
    console.log("Update files:", req.files);

    const {
      name,
      brand,
      category,
      shortDescription,
      description,
      price,
      discountPrice
    } = req.body;

    const images = await Product.create({
      name,
      brand,
      category,
      shortDescription,
      description,
      price: Number(price),
      discountPrice:
        discountPrice == undefined ||
          discountPrice == ""
          ? 0
          : Number(discountPrice),

      images
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product
    });


  } catch (error) {
    console.error("Create product error:", error);


    return res.status(400).json({
      sucess: true,
      message: error.message
    });
  }
};

// ============================================
// GET ALL PRODUCTS
// Get /api/products
// ============================================

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================================
// GET SINGAL PRODUCTS
// Get /api/products
// ============================================

const getProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid product ID",
    });
  }
};

// ============================================
// UPDATE PRODUCTS
// Put /api/products
// ============================================

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!products) {
      return res.status(404).json({
        sucess: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      sucess: true,
      message: "product updated successfuly",
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================================
// DELETE PRODUCTS
// Del /api/products
// ============================================

const deleteProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid product ID",
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};