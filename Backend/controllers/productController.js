const Product = require("../models/Product");


// ==========================================
// CREATE PRODUCT
// POST /api/products
// ==========================================

const createProduct = async (req, res) => {
    try {
        console.log("Product body:", req.body);
        console.log("Uploaded files:", req.files);

        const {
            name,
            brand,
            category,
            shortDescription,
            description,
            price,
            discountPrice
        } = req.body;

        const images = (req.files || []).map(
            (file) => `/uploads/${file.filename}`
        );

        const product = await Product.create({
            name,
            brand,
            category,
            shortDescription,
            description,
            price: Number(price),
            discountPrice:
                discountPrice === undefined ||
                discountPrice === ""
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
            success: false,
            message: error.message
        });
    }
};


// ==========================================
// GET ALL PRODUCTS
// GET /api/products
// ==========================================

const getProducts = async (req, res) => {

    try {

        const products = await Product
            .find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: products.length,
            products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// ==========================================
// GET SINGLE PRODUCT
// GET /api/products/:id
// ==========================================

const getProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }

        res.status(200).json({
            success: true,
            product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Invalid product ID"
        });

    }
};


// ==========================================
// UPDATE PRODUCT
// PUT /api/products/:id
// ==========================================


const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        const {
            name,
            brand,
            category,
            shortDescription,
            description,
            price,
            discountPrice,
            existingImages
        } = req.body;

        // Keep the existing images unless the form specifies otherwise
        let imagesToKeep = product.images || [];

        if (existingImages !== undefined) {
            try {
                imagesToKeep = JSON.parse(existingImages);
            } catch {
                return res.status(400).json({
                    success: false,
                    message: "Invalid existingImages format"
                });
            }

            if (
                !Array.isArray(imagesToKeep) ||
                !imagesToKeep.every(
                    (image) => typeof image === "string"
                )
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid existing images"
                });
            }

            // Only allow image paths already belonging to this product
            const originalImages = product.images || [];

            if (
                imagesToKeep.some(
                    (image) => !originalImages.includes(image)
                )
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid existing image path"
                });
            }
        }

        // Get newly uploaded images from Multer
        const uploadedImages = (req.files || []).map(
            (file) => `/uploads/${file.filename}`
        );

        const finalImages = [
            ...imagesToKeep,
            ...uploadedImages
        ];

        if (finalImages.length > 5) {
            return res.status(400).json({
                success: false,
                message: "Maximum 5 product images are allowed"
            });
        }

        // Update product fields
        product.name = name;
        product.brand = brand;
        product.category = category;
        product.shortDescription = shortDescription;
        product.description = description;
        product.price = Number(price);
        product.discountPrice =
            discountPrice === undefined ||
            discountPrice === ""
                ? 0
                : Number(discountPrice);

        product.images = finalImages;

        await product.save();

        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product
        });
    } catch (error) {
        console.error("Update product error:", error);

        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};



// ==========================================
// DELETE PRODUCT
// DELETE /api/products/:id
// ==========================================

const deleteProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndDelete(
            req.params.id
        );

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Invalid product ID"
        });

    }
};


module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};