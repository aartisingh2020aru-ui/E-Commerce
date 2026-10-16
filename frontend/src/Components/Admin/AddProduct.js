
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "./Layout";

function AddProduct() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    // Handle image selection
    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files || []);

        if (selectedImages.length + images.length > 5) {
            toast.error("You can upload a maximum of 5 images.");
            e.target.value = "";
            return;
        }

        const invalidImage = selectedImages.find((file) => {
            return (
                !["image/jpeg", "image/png", "image/webp"].includes(
                    file.type
                ) ||
                file.size > 5 * 1024 * 1024
            );
        });

        if (invalidImage) {
            toast.error(
                "Only JPG, PNG and WEBP images under 5 MB are allowed."
            );
            e.target.value = ""; 
            return;
        }

        setImages((prev) => [...prev, ...selectedImages]);
        e.target.value = "";
    };

    // Remove selected image
    const removeImage = (index) => {
        setImages((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    // Submit product
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !name.trim() ||
            !category ||
            !description.trim() ||
            price === ""
        ) {
            toast.error("Please fill all required fields.");
            return;
        }

        const productPrice = Number(price);
        const productDiscount =
            discountPrice === "" ? 0 : Number(discountPrice);

        if (
            !Number.isFinite(productPrice) ||
            productPrice < 0
        ) {
            toast.error("Please enter a valid product price.");
            return;
        }

        if (
            !Number.isFinite(productDiscount) ||
            productDiscount < 0 ||
            (productDiscount > 0 &&
                productDiscount >= productPrice)
        ) {
            toast.error(
                "Discount price must be less than the original price."
            );
            return;
        }

        try {
            setLoading(true);

            // FormData is required for image uploads
            const formData = new FormData();

            formData.append("name", name.trim());
            formData.append("brand", brand.trim());
            formData.append("category", category);
            formData.append(
                "shortDescription",
                shortDescription.trim()
            );
            formData.append("description", description.trim());
            formData.append("price", String(productPrice));
            formData.append(
                "discountPrice",
                String(productDiscount)
            );

            images.forEach((image) => {
                formData.append("images", image);
            });

            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/admin/products`,
                formData
            );

            if (res.data.success) {
                toast.success(res.data.message);

                // Reset form
                setName("");
                setBrand("");
                setCategory("");
                setShortDescription("");
                setDescription("");
                setPrice("");
                setDiscountPrice("");
                setImages([]);

                navigate("/products");
            } else {
                toast.error(
                    res.data.message || "Failed to create product."
                );
            }
        } catch (error) {
            console.error(
                "Create product error:",
                error.response?.data || error
            );

            toast.error(
                error.response?.data?.message ||
                "Something went wrong while creating the product."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <section className="dashboard-content">

                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <a href="/dashboard">Dashboard</a>
                    <span>/</span>
                    <a href="/products">Products</a>
                    <span>/</span>
                    <strong>Add Product</strong>
                </div>

                {/* Heading */}
                <div className="add-product-heading">
                    <div>
                        <h2>Add New Product</h2>
                        <p>
                            Fill in the information below to add a
                            new product.
                        </p>
                    </div>
                </div>

                <form
                    className="product-form"
                    onSubmit={handleSubmit}
                >
                    <div className="product-form-main">

                        {/* Basic Information */}
                        <div className="form-card">
                            <div className="form-card-header">
                                <h3>Basic Information</h3>
                                <p>
                                    Enter the basic details of your product.
                                </p>
                            </div>

                            <div className="form-card-body">
                                <div className="form-group full-width">
                                    <label htmlFor="product-name">
                                        Product Name <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="product-name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="Enter product name"
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="brand">
                                            Brand
                                        </label>
                                        <input
                                            type="text"
                                            id="brand"
                                            value={brand}
                                            onChange={(e) =>
                                                setBrand(e.target.value)
                                            }
                                            placeholder="Enter brand name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="category">
                                            Category <span>*</span>
                                        </label>
                                        <select
                                            id="category"
                                            value={category}
                                            onChange={(e) =>
                                                setCategory(e.target.value)
                                            }
                                            required
                                        >
                                            <option value="">
                                                Select category
                                            </option>
                                            <option value="Electronics">
                                                Electronics
                                            </option>
                                            <option value="Fashion">
                                                Fashion
                                            </option>
                                            <option value="Accessories">
                                                Accessories
                                            </option>
                                            <option value="Home & Kitchen">
                                                Home &amp; Kitchen
                                            </option>
                                            <option value="Beauty">
                                                Beauty
                                            </option>
                                            <option value="Sports">
                                                Sports
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group full-width">
                                    <label htmlFor="short-description">
                                        Short Description
                                    </label>
                                    <textarea
                                        id="short-description"
                                        rows={4}
                                        maxLength={200}
                                        value={shortDescription}
                                        onChange={(e) =>
                                            setShortDescription(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Write a short description..."
                                    />
                                    <small className="input-help">
                                        {shortDescription.length}/200 characters
                                    </small>
                                </div>

                                <div className="form-group full-width">
                                    <label htmlFor="description">
                                        Product Description <span>*</span>
                                    </label>
                                    <textarea
                                        id="description"
                                        rows={8}
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        placeholder="Write complete product description..."
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="form-card">
                            <div className="form-card-header">
                                <h3>Pricing</h3>
                                <p>
                                    Set the product price and discount.
                                </p>
                            </div>

                            <div className="form-card-body">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="price">
                                            Price <span>*</span>
                                        </label>
                                        <div className="input-prefix">
                                            <span>₹</span>
                                            <input
                                                type="number"
                                                id="price"
                                                min="0"
                                                step="0.01"
                                                value={price}
                                                onChange={(e) =>
                                                    setPrice(e.target.value)
                                                }
                                                placeholder="0.00"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="discount-price">
                                            Discount Price
                                        </label>
                                        <div className="input-prefix">
                                            <span>₹</span>
                                            <input
                                                type="number"
                                                id="discount-price"
                                                min="0"
                                                step="0.01"
                                                value={discountPrice}
                                                onChange={(e) =>
                                                    setDiscountPrice(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Images */}
                        <div className="form-card">
                            <div className="form-card-header">
                                <h3>Product Images</h3>
                                <p>Upload product images.</p>
                            </div>

                            <div className="form-card-body">
                                <div className="image-upload">
                                    <div className="upload-icon">↑</div>
                                    <h4>Upload Product Images</h4>
                                    <p>Select images from your computer</p>

                                    <label htmlFor="product-images">
                                        Browse Files
                                    </label>

                                    <input
                                        type="file"
                                        id="product-images"
                                        multiple
                                        accept="image/jpeg,image/png,image/webp"
                                        onChange={handleImageChange}
                                    />

                                    <small>
                                        JPG, PNG or WEBP. Maximum 5 MB each.
                                    </small>
                                </div>

                                <div className="image-preview-list">
                                    {images.map((image, index) => (
                                        <div
                                            className="image-preview"
                                            key={`${image.name}-${index}`}
                                        >
                                            <img
                                                src={URL.createObjectURL(image)}
                                                alt={image.name}
                                                width="100"
                                                height="100"
                                                style={{
                                                    objectFit: "cover"
                                                }}
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeImage(index)
                                                }
                                                aria-label="Remove image"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="form-actions">
                       

                        <button
                            type="submit"
                            className="save-product-btn"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save Product"}
                        </button>
                    </div>
                </form>
            </section>
        </Layout>
    );
}

export default AddProduct;
