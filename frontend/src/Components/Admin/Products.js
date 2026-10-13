import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Layout from "./Layout";
// import "./Products.css";

const API_URL = process.env.REACT_APP_API || "http://localhost:8080";

const PAGE_SIZE = 8;

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch products from the backend
  const fetchProducts = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${API_URL}/api/admin/products`
      );

      if (response.data.success) {
        setProducts(response.data.products || []);
      } else {
        toast.error(response.data.message || "Unable to fetch products");
      }
    } catch (error) {
      console.error(
        "Fetch products error:",
        error.response?.data || error.message
      );

      toast.error(
        error.response?.data?.message ||
          "Failed to fetch products. Check your backend connection."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Build the category dropdown from existing products
  const categories = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.category)
          .filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b));
  }, [products]);

  // Search and category filtering
  const filteredProducts = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !searchText ||
        [product.name, product.brand, product.category]
          .some((value) =>
            String(value || "").toLowerCase().includes(searchText)
          );

      const matchesCategory =
        categoryFilter === "all" ||
        product.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, categoryFilter]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE)
  );

  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, categoryFilter]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // Format currency
  const formatPrice = (price) => {
    const amount = Number(price);

    if (!Number.isFinite(amount)) return "—";

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  // Format the product creation date
  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) return "—";

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Resolve uploaded image URLs
  const getImageUrl = (image) => {
    if (!image) return "";

    if (/^https?:\/\//i.test(image)) {
      return image;
    }

    return `${API_URL.replace(/\/$/, "")}/${image.replace(/^\/+/, "")}`;
  };

  // Navigate to the edit page
  const handleEdit = (id) => {
    window.location.assign(`/edit-product/${id}`);
  };

  // Delete product from MongoDB
  const handleDelete = async (product) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.name}"?`
    );

    if (!confirmed) return;

    setDeletingId(product._id);

    try {
      const response = await axios.delete(
        `${API_URL}/api/admin/products/${product._id}`
      );

      if (response.data.success) {
        setProducts((previous) =>
          previous.filter((item) => item._id !== product._id)
        );

        toast.success("Product deleted successfully");
      } else {
        toast.error(response.data.message || "Unable to delete product");
      }
    } catch (error) {
      console.error(
        "Delete product error:",
        error.response?.data || error.message
      );

      toast.error(
        error.response?.data?.message || "Failed to delete product"
      );
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <Layout>
      <main className="products-page">
        {/* Page heading */}
        <div className="products-page-heading">
          <div>
            <span className="products-eyebrow">INVENTORY MANAGEMENT</span>
            <h1>Products</h1>
            <p>Manage your store products in one place.</p>
          </div>

          <button
            type="button"
            className="products-primary-btn"
            onClick={() => window.location.assign("/add-product")}
          >
            <span aria-hidden="true">＋</span> Add Product
          </button>
        </div>

        {/* Summary cards */}
        <section className="products-stats">
          <article className="products-stat-card">
            <div className="products-stat-icon products-icon-purple">
              <span aria-hidden="true">▦</span>
            </div>
            <div>
              <p>Total Products</p>
              <h2>{products.length}</h2>
              <span>Products in your database</span>
            </div>
          </article>

          <article className="products-stat-card">
            <div className="products-stat-icon products-icon-blue">
              <span aria-hidden="true">▤</span>
            </div>
            <div>
              <p>Categories</p>
              <h2>{categories.length}</h2>
              <span>Unique product categories</span>
            </div>
          </article>

          <article className="products-stat-card">
            <div className="products-stat-icon products-icon-green">
              <span aria-hidden="true">₹</span>
            </div>
            <div>
              <p>Average Price</p>
              <h2>
                {products.length
                  ? formatPrice(
                      products.reduce(
                        (sum, product) => sum + (Number(product.price) || 0),
                        0
                      ) / products.length
                    )
                  : formatPrice(0)}
              </h2>
              <span>Across all products</span>
            </div>
          </article>
        </section>

        {/* Product table */}
        <section className="products-table-card">
          <div className="products-table-heading">
            <div>
              <h2>All Products</h2>
              <p>
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"} found
              </p>
            </div>

            <button
              type="button"
              className="products-refresh-btn"
              onClick={fetchProducts}
              disabled={loading}
            >
              <span aria-hidden="true">↻</span>{" "}
              {loading ? "Loading..." : "Refresh"}
            </button>
          </div>

          {/* Search and filters */}
          <div className="products-toolbar">
            <div className="products-search">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by product, brand, category..."
                aria-label="Search products"
              />
              {search && (
                <button
                  type="button"
                  className="products-clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <select
              className="products-category-filter"
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
              aria-label="Filter by category"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="products-table-scroll">
            <table className="products-table">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>PRICE</th>
                  <th>DISCOUNT PRICE</th>
                  <th>DATE ADDED</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="products-message-cell">
                      <div className="products-loading">
                        <span className="products-spinner" />
                        <p>Loading products...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="products-message-cell">
                      <div className="products-empty">
                        <div className="products-empty-icon">▤</div>
                        <h3>
                          {products.length
                            ? "No matching products"
                            : "No products found"}
                        </h3>
                        <p>
                          {products.length
                            ? "Try another search term or category."
                            : "Add your first product to see it listed here."}
                        </p>

                        {products.length === 0 && (
                          <button
                            type="button"
                            className="products-primary-btn"
                            onClick={() =>
                              window.location.assign("/add-product")
                            }
                          >
                            Add Your First Product
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  visibleProducts.map((product) => (
                    <tr key={product._id}>
                      <td>
                        <div className="products-product-cell">
                          <div className="products-product-image">
                            {product.images?.[0] ? (
                              <img
                                src={getImageUrl(product.images[0])}
                                alt={product.name || "Product"}
                                loading="lazy"
                                onError={(event) => {
                                  event.currentTarget.style.display = "none";
                                }}
                              />
                            ) : null}

                            {!product.images?.[0] && (
                              <span aria-hidden="true">▧</span>
                            )}
                          </div>

                          <div className="products-product-info">
                            <strong>{product.name || "Unnamed product"}</strong>
                            <span>{product.brand || "No brand"}</span>
                            <small>
                              ID: {String(product._id || "").slice(-8)}
                            </small>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className="products-category-badge">
                          {product.category || "Uncategorized"}
                        </span>
                      </td>

                      <td className="products-price">
                        {formatPrice(product.price)}
                      </td>

                      <td className="products-discount-price">
                        {Number(product.discountPrice) > 0
                          ? formatPrice(product.discountPrice)
                          : "—"}
                      </td>

                      <td className="products-date">
                        {formatDate(product.createdAt)}
                      </td>

                      <td>
                        <div className="products-actions">
                          <button
                            type="button"
                            className="products-action-btn products-view-btn"
                            title="View product"
                            aria-label={`View ${product.name}`}
                            onClick={() =>
                              window.location.assign(
                                `/view-product/${product._id}`
                              )
                            }
                          >
                            ↗
                          </button>

                          <button
                            type="button"
                            className="products-action-btn products-edit-btn"
                            title="Edit product"
                            aria-label={`Edit ${product.name}`}
                            onClick={() => handleEdit(product._id)}
                          >
                            ✎
                          </button>

                          <button
                            type="button"
                            className="products-action-btn products-delete-btn"
                            title="Delete product"
                            aria-label={`Delete ${product.name}`}
                            disabled={deletingId === product._id}
                            onClick={() => handleDelete(product)}
                          >
                            {deletingId === product._id ? "…" : "×"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {!loading && filteredProducts.length > 0 && (
            <div className="products-pagination">
              <p>
                Showing{" "}
                {(currentPage - 1) * PAGE_SIZE + 1}–
                {Math.min(currentPage * PAGE_SIZE, filteredProducts.length)}{" "}
                of {filteredProducts.length} products
              </p>

              <div className="products-pagination-controls">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((page) => Math.max(1, page - 1))
                  }
                >
                  Previous
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                )
                  .filter(
                    (page) =>
                      page === 1 ||
                      page === totalPages ||
                      Math.abs(page - currentPage) <= 1
                  )
                  .map((page, index, pages) => (
                    <React.Fragment key={page}>
                      {index > 0 && page - pages[index - 1] > 1 && (
                        <span className="products-page-dots">…</span>
                      )}

                      <button
                        type="button"
                        className={
                          currentPage === page
                            ? "products-page-number active"
                            : "products-page-number"
                        }
                        onClick={() => setCurrentPage(page)}
                        aria-current={
                          currentPage === page ? "page" : undefined
                        }
                      >
                        {page}
                      </button>
                    </React.Fragment>
                  ))}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((page) =>
                      Math.min(totalPages, page + 1)
                    )
                  }
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}

export default Products;