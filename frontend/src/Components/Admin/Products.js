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
                                {/* Product 1 */}
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

                                {/* Product 2 */}
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

                                {/* Product 3 */}
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

                                {/* Product 4 */}
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

                                {/* Product 5 */}
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

                                {/* Product 6 */}
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image blue">👖</div>
                                            <div>
                                                <strong>Slim Fit Denim Jeans</strong>
                                                <small>Men's Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">CL-061</td>
                                    <td>Clothing</td>
                                    <td className="price">$59.99</td>
                                    <td><span className="stock good">65 in stock</span></td>
                                    <td><span className="status active-status"><i /> Active</span></td>
                                    <td className="date">Sep 28, 2026</td>
                                    <td><button className="more-btn">•••</button></td>
                                </tr>

                                {/* Product 7 */}
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image orange">🎒</div>
                                            <div>
                                                <strong>Travel Backpack</strong>
                                                <small>Travel Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">BG-025</td>
                                    <td>Accessories</td>
                                    <td className="price">$45.00</td>
                                    <td><span className="stock good">42 in stock</span></td>
                                    <td><span className="status active-status"><i /> Active</span></td>
                                    <td className="date">Sep 27, 2026</td>
                                    <td><button className="more-btn">•••</button></td>
                                </tr>

                                {/* Product 8 */}
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image brown">👓</div>
                                            <div>
                                                <strong>Classic Sunglasses</strong>
                                                <small>Summer Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">AC-032</td>
                                    <td>Accessories</td>
                                    <td className="price">$24.99</td>
                                    <td><span className="stock low">9 in stock</span></td>
                                    <td><span className="status active-status"><i /> Active</span></td>
                                    <td className="date">Sep 26, 2026</td>
                                    <td><button className="more-btn">•••</button></td>
                                </tr>

                                {/* Product 9 */}
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image green">📱</div>
                                            <div>
                                                <strong>Smartphone Pro</strong>
                                                <small>Mobile Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">EL-068</td>
                                    <td>Electronics</td>
                                    <td className="price">$699.00</td>
                                    <td><span className="stock good">31 in stock</span></td>
                                    <td><span className="status active-status"><i /> Active</span></td>
                                    <td className="date">Sep 25, 2026</td>
                                    <td><button className="more-btn">•••</button></td>
                                </tr>

                                {/* Product 10 */}
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image black">⌨️</div>
                                            <div>
                                                <strong>Mechanical Keyboard</strong>
                                                <small>Gaming Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">EL-072</td>
                                    <td>Electronics</td>
                                    <td className="price">$79.99</td>
                                    <td><span className="stock good">54 in stock</span></td>
                                    <td><span className="status active-status"><i /> Active</span></td>
                                    <td className="date">Sep 24, 2026</td>
                                    <td><button className="more-btn">•••</button></td>
                                </tr>

                                {/* Product 11 */}
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image orange">☕</div>
                                            <div>
                                                <strong>Ceramic Coffee Mug</strong>
                                                <small>Kitchen Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">HM-014</td>
                                    <td>Home & Living</td>
                                    <td className="price">$14.99</td>
                                    <td><span className="stock good">110 in stock</span></td>
                                    <td><span className="status active-status"><i /> Active</span></td>
                                    <td className="date">Sep 23, 2026</td>
                                    <td><button className="more-btn">•••</button></td>
                                </tr>

                                {/* Product 12 */}
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image blue">🧥</div>
                                            <div>
                                                <strong>Winter Puffer Jacket</strong>
                                                <small>Winter Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">CL-078</td>
                                    <td>Clothing</td>
                                    <td className="price">$119.00</td>
                                    <td><span className="stock low">6 in stock</span></td>
                                    <td><span className="status draft-status"><i /> Draft</span></td>
                                    <td className="date">Sep 22, 2026</td>
                                    <td><button className="more-btn">•••</button></td>
                                </tr>

                                {/* Product 13 */}
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image green">🧴</div>
                                            <div>
                                                <strong>Daily Face Moisturizer</strong>
                                                <small>Skincare Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">BT-019</td>
                                    <td>Beauty</td>
                                    <td className="price">$18.50</td>
                                    <td><span className="stock good">87 in stock</span></td>
                                    <td><span className="status active-status"><i /> Active</span></td>
                                    <td className="date">Sep 21, 2026</td>
                                    <td><button className="more-btn">•••</button></td>
                                </tr>

                                {/* Product 14 */}
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image brown">🧸</div>
                                            <div>
                                                <strong>Soft Teddy Bear</strong>
                                                <small>Toys Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">TY-026</td>
                                    <td>Toys</td>
                                    <td className="price">$29.00</td>
                                    <td><span className="stock out">0 in stock</span></td>
                                    <td><span className="status out-status"><i /> Out of Stock</span></td>
                                    <td className="date">Sep 20, 2026</td>
                                    <td><button className="more-btn">•••</button></td>
                                </tr>

                                {/* Product 15 */}
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="product">
                                            <div className="product-image black">🔊</div>
                                            <div>
                                                <strong>Portable Bluetooth Speaker</strong>
                                                <small>Audio Collection</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="sku">EL-085</td>
                                    <td>Electronics</td>
                                    <td className="price">$49.99</td>
                                    <td><span className="stock good">38 in stock</span></td>
                                    <td><span className="status active-status"><i /> Active</span></td>
                                    <td className="date">Sep 19, 2026</td>
                                    <td><button className="more-btn">•••</button></td>
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