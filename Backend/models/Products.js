const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true
        },

        brand: {
            type: String,
            trim: true
        },

        category: {
            type: String,
            required: [true, "Category is required"],
            trim: true
        },

        shortDescription: {
            type: String,
            trim: true
        },

        Description: {
            type: String,
            trim: true
        },

        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [0, "Price cannot be negative"]
        },

        discountPrice: {
            type: Number,
            default: 0,
            min: [0, "Discount price cannot be negative"]
        },

        images:[
            {
                type: String
            }
        ]

    },

    {
        timestamps: true
    }

)

module.exports = mongoose.model("products", productSchema);  