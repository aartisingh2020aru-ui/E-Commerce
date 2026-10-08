import Layout from "./Layout";
import './Products.css';


function Products() {
    return (
        <>
            <Layout>
                <section className="stats">
                    <div className="stat-card">
                        <div className="stat-icon purple">▣</div>
                        <div>
                            <span>Total Products</span>
                            <strong>248</strong>
                            <small className="positive">↑ 8.2% <em>vs last month</em></small>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon green">✓</div>
                        <div>
                            <span>Active Products</span>
                            <strong>218</strong>
                            <small className="positive">↑ 5.4% <em>vs last month</em></small>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon orange">!</div>
                        <div>
                            <span>Low Stock</span>
                            <strong>18</strong>
                            <small className="negative">↑ 3 <em>from last month</em></small>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon red">×</div>
                        <div>
                            <span>Out of Stock</span>
                            <strong>12</strong>
                            <small className="negative">↑ 2 <em>from last month</em></small>
                        </div>
                    </div>
                </section>

                {/* Products Card */}
                <section className="products-card">
                    <div className="products-header">
                        <div>
                            <h2>All Products</h2>
                            <span>248 products</span>
                        </div>
                        <div className="view-buttons">
                            <button className="view-btn active">☷</button>
                            <button className="view-btn">▦</button>
                        </div>
                    </div>
                    {/* Filters */}
                    <div className="filters">
                        <div className="search-box">
                            <span>⌕</span>
                            <input type="text" placeholder="Search by product name or SKU..." />
                        </div>
                        <select>
                            <option>All Categories</option>
                            <option>Clothing</option>
                            <option>Footwear</option>
                            <option>Accessories</option>
                            <option>Electronics</option>
                        </select>
                        <select>
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Draft</option>
                            <option>Out of Stock</option>
                        </select>
                        <button className="filter-btn">
                            ⚙ Filters
                        </button>
                    </div>
                    {/* Table */}
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th className="check">
                                        <input type="checkbox" />
                                    </th>
                                    <th>PRODUCT</th>
                                    <th>SKU</th>
                                    <th>CATEGORY</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>STATUS</th>
                                    <th>UPDATED</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image blue">
                                                👕
                                            </div>
                                            <div>
                                                <strong>Classic Cotton T-Shirt</strong>
                                                <small>Men's Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">TS-001</td>
                                    <td>Clothing</td>
                                    <td className="price">$29.99</td>
                                    <td>
                                        <span className="stock good">124 in stock</span>
                                    </td>
                                    <td>
                                        <span className="status active-status">
                                            <i /> Active
                                        </span>
                                    </td>
                                    <td className="date">Oct 05, 2026</td>
                                    <td>
                                        <button className="more-btn">•••</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image orange">
                                                👟
                                            </div>
                                            <div>
                                                <strong>Urban Running Shoes</strong>
                                                <small>Sports Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">SH-024</td>
                                    <td>Footwear</td>
                                    <td className="price">$89.00</td>
                                    <td>
                                        <span className="stock low">12 in stock</span>
                                    </td>
                                    <td>
                                        <span className="status active-status">
                                            <i /> Active
                                        </span>
                                    </td>
                                    <td className="date">Oct 04, 2026</td>
                                    <td>
                                        <button className="more-btn">•••</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image brown">
                                                👜
                                            </div>
                                            <div>
                                                <strong>Premium Leather Bag</strong>
                                                <small>Accessories</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">BG-018</td>
                                    <td>Accessories</td>
                                    <td className="price">$120.00</td>
                                    <td>
                                        <span className="stock out">0 in stock</span>
                                    </td>
                                    <td>
                                        <span className="status out-status">
                                            <i /> Out of Stock
                                        </span>
                                    </td>
                                    <td className="date">Oct 03, 2026</td>
                                    <td>
                                        <button className="more-btn">•••</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image black">
                                                🎧
                                            </div>
                                            <div>
                                                <strong>Wireless Headphones</strong>
                                                <small>Audio</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">EL-042</td>
                                    <td>Electronics</td>
                                    <td className="price">$149.99</td>
                                    <td>
                                        <span className="stock good">76 in stock</span>
                                    </td>
                                    <td>
                                        <span className="status active-status">
                                            <i /> Active
                                        </span>
                                    </td>
                                    <td className="date">Oct 02, 2026</td>
                                    <td>
                                        <button className="more-btn">•••</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image green">
                                                ⌚
                                            </div>
                                            <div>
                                                <strong>Smart Watch Pro</strong>
                                                <small>Wearables</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">EL-055</td>
                                    <td>Electronics</td>
                                    <td className="price">$199.00</td>
                                    <td>
                                        <span className="stock low">8 in stock</span>
                                    </td>
                                    <td>
                                        <span className="status draft-status">
                                            <i /> Draft
                                        </span>
                                    </td>
                                    <td className="date">Sep 29, 2026</td>
                                    <td>
                                        <button className="more-btn">•••</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Footer */}
                    <div className="table-footer">
                        <span>
                            Showing <strong>1–5</strong> of <strong>248</strong> products
                        </span>
                        <div className="pagination">
                            <button disabled>‹</button>
                            <button className="current">1</button>
                            <button>2</button>
                            <button>3</button>
                            <span>...</span>
                            <button>50</button>
                            <button>›</button>
                        </div>
                    </div>






                </section>
                
            </Layout>

        </>
    );
}

export default Products;