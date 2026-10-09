import Layout from "./Layout";
import './AddProduct.css';

function AddProduct() {
    return (
        <>

            <Layout>
                {/* Main Content */}
                <main className="main-content">
                    {/* Header */}
                    <header className="topbar">
                        <div>
                            <p className="breadcrumb">Dashboard / Products / Add Product</p>
                            <h1>Add New Product</h1>
                            <p className="subtitle">Create and manage your product listing.</p>
                        </div>
                        <div className="admin-profile">
                            <div className="notification">♧</div>
                            <div className="avatar">A</div>
                            <div>
                                <strong>Admin</strong>
                                <small>Store Manager</small>
                            </div>
                        </div>
                    </header>
                    <form className="product-form">
                        <div className="form-layout">
                            {/* Left Column */}
                            <section className="left-column">
                                <div className="card">
                                    <h2>Product Information</h2>
                                    <p className="card-description">
                                        Enter the basic details of your product.
                                    </p>
                                    <div className="field">
                                        <label htmlFor="productName">Product Name *</label>
                                        <input type="text" id="productName" placeholder="e.g. Premium Cotton T-Shirt" required />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="description">Product Description *</label>
                                        <textarea id="description" rows={5} placeholder="Describe your product..." required defaultValue={""} />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="shortDescription">Short Description</label>
                                        <input type="text" id="shortDescription" placeholder="A short summary of your product" />
                                    </div>
                                </div>
                                {/* Image Upload */}
                                <div className="card">
                                    <h2>Product Images</h2>
                                    <p className="card-description">
                                        Upload high-quality images of your product.
                                    </p>
                                    <label className="upload-box" htmlFor="productImages">
                                        <div className="upload-icon">↑</div>
                                        <strong>Drag and drop your images here</strong>
                                        <span>or <b>browse files</b> from your computer</span>
                                        <small>PNG, JPG or WEBP · Max 5 MB per image</small>
                                    </label>
                                    <input type="file" id="productImages" accept="image/png,image/jpeg,image/webp" multiple hidden />
                                </div>
                                {/* Pricing */}
                                <div className="card">
                                    <h2>Pricing</h2>
                                    <p className="card-description">
                                        Set the selling price and discount.
                                    </p>
                                    <div className="two-columns">
                                        <div className="field">
                                            <label htmlFor="regularPrice">Regular Price (₹) *</label>
                                            <input type="number" id="regularPrice" min={0} step="0.01" placeholder={999.00} required />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="salePrice">Sale Price (₹)</label>
                                            <input type="number" id="salePrice" min={0} step="0.01" placeholder={799.00} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="cost">Cost per Item (₹)</label>
                                        <input type="number" id="cost" min={0} step="0.01" placeholder={500.00} />
                                    </div>
                                </div>
                            </section>
                            {/* Right Column */}
                            <section className="right-column">
                                {/* Organization */}
                                <div className="card">
                                    <h2>Organization</h2>
                                    <div className="field">
                                        <label htmlFor="category">Category *</label>
                                        <select id="category" required>
                                            <option value>Select category</option>
                                            <option>Clothing</option>
                                            <option>Electronics</option>
                                            <option>Footwear</option>
                                            <option>Beauty &amp; Personal Care</option>
                                            <option>Home &amp; Living</option>
                                            <option>Accessories</option>
                                        </select>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="brand">Brand</label>
                                        <input type="text" id="brand" placeholder="Enter brand name" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="tags">Product Tags</label>
                                        <input type="text" id="tags" placeholder="casual, trending, summer" />
                                        <small className="helper">
                                            Separate multiple tags with commas.
                                        </small>
                                    </div>
                                </div>
                                {/* Inventory */}
                                <div className="card">
                                    <h2>Inventory</h2>
                                    <div className="field">
                                        <label htmlFor="sku">SKU (Product Code)</label>
                                        <input type="text" id="sku" placeholder="e.g. TS-001" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="quantity">Stock Quantity *</label>
                                        <input type="number" id="quantity" min={0} step={1} placeholder={100} required />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="stockStatus">Stock Status</label>
                                        <select id="stockStatus">
                                            <option>In Stock</option>
                                            <option>Out of Stock</option>
                                            <option>Pre-order</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Shipping */}
                                <div className="card">
                                    <h2>Shipping</h2>
                                    <div className="field">
                                        <label htmlFor="weight">Weight (kg)</label>
                                        <input type="number" id="weight" min={0} step="0.01" placeholder="0.50" />
                                    </div>
                                    <div className="two-columns">
                                        <div className="field">
                                            <label htmlFor="length">Length (cm)</label>
                                            <input type="number" id="length" min={0} placeholder={20} />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="width">Width (cm)</label>
                                            <input type="number" id="width" min={0} placeholder={15} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* Footer Actions */}
                        <div className="form-actions">
                            <button type="reset" className="btn btn-secondary">
                                Reset Form
                            </button>
                            <div className="action-right">
                                <button type="button" className="btn btn-outline">
                                    Save as Draft
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    + Publish Product
                                </button>
                            </div>
                        </div>
                    </form>
                </main>
            </Layout>

        </>
    );
}
export default AddProduct;