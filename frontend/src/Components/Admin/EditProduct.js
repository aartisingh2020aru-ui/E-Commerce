
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "./Layout";

const API_URL =
    process.env.REACT_APP_API;

function EditProduct() {
    console.log("Hello");
    const { id } = useParams();
    console.log(id);
    
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");

    // Existing image paths from MongoDB
    const [existingImages, setExistingImages] = useState([]);

    // Newly selected image files
    const [newImages, setNewImages] = useState([]);

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    // Fetch existing product details
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setFetching(true);

                const response = await axios.get(
                    `${API_URL}/api/admin/products/${id}`
                );

                if (!response.data.success) {
                    toast.error(
                        response.data.message || "Product not found"
                    );
                    navigate("/products");
                    return;
                }

                const product =
                    response.data.product || response.data;

                setName(product.name || "");
                setBrand(product.brand || "");
                setCategory(product.category || "");
                setShortDescription(
                    product.shortDescription || ""
                );
                setDescription(product.description || "");
                setPrice(
                    product.price !== undefined
                        ? String(product.price)
                        : ""
                );
                setDiscountPrice(
                    product.discountPrice !== undefined
                        ? String(product.discountPrice)
                        : ""
                );

                setExistingImages(product.images || []);
            } catch (error) {
                console.error(
                    "Fetch product error:",
                    error.response?.data || error.message
                );

                toast.error(
                    error.response?.data?.message ||
                    "Failed to load product details"
                );

                navigate("/products");
            } finally {
                setFetching(false);
            }
        };

        if (id) {
            fetchProduct();
        } else {
            toast.error("Product ID is missing");
            navigate("/products");
        }
    }, [id, navigate]);

    // Handle newly selected images
    const handleImageChange = (event) => {
        const selectedImages = Array.from(
            event.target.files || []
        );

        const invalidImage = selectedImages.find((file) => {
            return (
                ![
                    "image/jpeg",
                    "image/png",
                    "image/webp"
                ].includes(file.type) ||
                file.size > 5 * 1024 * 1024
            );
        });

        if (invalidImage) {
            toast.error(
                "Only JPG, PNG and WEBP images under 5 MB are allowed."
            );
            event.target.value = "";
            return;
        }

        const totalImages =
            existingImages.length +
            newImages.length +
            selectedImages.length;

        if (totalImages > 5) {
            toast.error(
                "You can keep a maximum of 5 product images."
            );
            event.target.value = "";
            return;
        }

        setNewImages((previous) => [
            ...previous,
            ...selectedImages
        ]);

        event.target.value = "";
    };

    // Remove an existing image from the product
    const removeExistingImage = (index) => {
        setExistingImages((previous) =>
            previous.filter((_, i) => i !== index)
        );
    };

    // Remove a newly selected image
    const removeNewImage = (index) => {
        setNewImages((previous) =>
            previous.filter((_, i) => i !== index)
        );
    };

    // Build the backend image URL
    const getImageUrl = (image) => {
        if (!image) return "";

        if (
            image.startsWith("http://") ||
            image.startsWith("https://")
        ) {
            return image;
        }

        return `${API_URL.replace(/\/+$/, "")}/${image.replace(/^\/+/, "")}`;
    };

    // Update product
    const handleSubmit = async (event) => {
        event.preventDefault();

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
            discountPrice === ""
                ? 0
                : Number(discountPrice);

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

            const formData = new FormData();

            formData.append("name", name.trim());
            formData.append("brand", brand.trim());
            formData.append("category", category);
            formData.append(
                "shortDescription",
                shortDescription.trim()
            );
            formData.append(
                "description",
                description.trim()
            );
            formData.append("price", String(productPrice));
            formData.append(
                "discountPrice",
                String(productDiscount)
            );

            // Tell the backend which old images to keep
            formData.append(
                "existingImages",
                JSON.stringify(existingImages)
            );

            // Append newly selected files
            newImages.forEach((image) => {
                formData.append("images", image);
            });

            const response = await axios.put(
                `${API_URL}/api/admin/products/${id}`,
                formData
            );

            if (response.data.success) {
                toast.success(
                    response.data.message ||
                    "Product updated successfully"
                );

                navigate("/products");
            } else {
                toast.error(
                    response.data.message ||
                    "Failed to update product"
                );
            }
        } catch (error) {
            console.error(
                "Update product error:",
                error.response?.data || error.message
            );

            toast.error(
                error.response?.data?.message ||
                "Something went wrong while updating the product."
            );
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <Layout>
                <section className="dashboard-content">
                    <h2>Loading product details...</h2>
                </section>
            </Layout>
        );
    }

    return (
        <Layout>
            <section className="dashboard-content">
                <div className="breadcrumb">
                    <a href="/dashboard">Dashboard</a>
                    <span>/</span>
                    <a href="/products">Products</a>
                    <span>/</span>
                    <strong>Edit Product</strong>
                </div>

                <div className="add-product-heading">
                    <div>
                        <h2>Edit Product</h2>
                        <p>
                            Update product information, pricing
                            and images.
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
                                    Update the basic details of
                                    your product.
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
                                    />
                                    <small className="input-help">
                                        {shortDescription.length}/200
                                        {" "}characters
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
                                    Update the product price and discount.
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
                                <p>
                                    Keep existing images or add new ones.
                                </p>
                            </div>

                            <div className="form-card-body">
                                <div className="image-preview-list">
                                    {existingImages.map(
                                        (image, index) => (
                                            <div
                                                className="image-preview"
                                                key={image}
                                            >
                                                <img
                                                    src={getImageUrl(image)}
                                                    alt={`Product ${index + 1}`}
                                                    width="100"
                                                    height="100"
                                                    style={{
                                                        objectFit: "cover"
                                                    }}
                                                    onError={(e) => {
                                                        console.error(
                                                            "Existing image failed:",
                                                            e.currentTarget.src
                                                        );
                                                    }}
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeExistingImage(index)
                                                    }
                                                    aria-label="Remove existing image"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        )
                                    )}

                                    {newImages.map((image, index) => (
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
                                                    removeNewImage(index)
                                                }
                                                aria-label="Remove new image"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="image-upload">
                                    <div className="upload-icon">↑</div>
                                    <h4>Add Product Images</h4>
                                    <p>
                                        Select additional images from your computer.
                                    </p>

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
                                        Total images cannot exceed 5.
                                    </small>
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
                            {loading
                                ? "Updating..."
                                : "Update Product"}
                        </button>
                    </div>
                </form>
            </section>
        </Layout>
    );
}

export default EditProduct;
