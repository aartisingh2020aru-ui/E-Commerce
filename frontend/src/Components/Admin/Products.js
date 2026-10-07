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

                    <section className="premium-products">
                        <div className="premium-header">
                            <div>
                                <span className="eyebrow">STORE INVENTORY</span>
                                <h1>Explore Products</h1>
                                <p>Manage, monitor and grow your product collection.</p>
                            </div>
                            <div className="header-actions">
                                <button className="outline-btn">↕ Sort</button>
                                <button className="primary-btn">＋ Add Product</button>
                            </div>
                        </div>
                        {/* Categories */}
                        <div className="category-row">
                            <button className="category active">All Products <span>248</span></button>
                            <button className="category">Fashion <span>82</span></button>
                            <button className="category">Electronics <span>46</span></button>
                            <button className="category">Shoes <span>35</span></button>
                            <button className="category">Accessories <span>51</span></button>
                            <button className="category">Lifestyle <span>34</span></button>
                        </div>
                        {/* Products */}
                        <div className="premium-grid">
                            {/* Product 1 */}
                            <article className="premium-card">
                                <div className="visual visual-1">
                                    <span className="discount">-25%</span>
                                    <button className="heart">♡</button>
                                    <div className="product-art">👟</div>
                                    <div className="floating-label">
                                        <span className="dot green" />
                                        Best Seller
                                    </div>
                                </div>
                                <div className="premium-content">
                                    <div className="product-meta">
                                        <span>NIKE</span>
                                        <small>SH-1024</small>
                                    </div>
                                    <h2>Air Max Street Runner</h2>
                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.9</b>
                                        <small>(328 reviews)</small>
                                    </div>
                                    <div className="price-row">
                                        <div>
                                            <strong>$129</strong>
                                            <del>$172</del>
                                        </div>
                                        <span className="sold">1.2k sold</span>
                                    </div>
                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>82 / 120</strong>
                                    </div>
                                    <div className="stock-bar">
                                        <i style={{ width: '68%' }} />
                                    </div>
                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>
                                </div>
                            </article>

                            {/* Product 2 */}
                            <article className="premium-card">
                                <div className="visual visual-2">
                                    <span className="new">NEW</span>
                                    <button className="heart">♡</button>
                                    <div className="product-art">⌚</div>
                                    <div className="floating-label">
                                        <span className="dot purple" />
                                        Trending
                                    </div>
                                </div>
                                <div className="premium-content">
                                    <div className="product-meta">
                                        <span>APPLE</span>
                                        <small>EL-2098</small>
                                    </div>
                                    <h2>Watch Series Ultra</h2>
                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.8</b>
                                        <small>(194 reviews)</small>
                                    </div>
                                    <div className="price-row">
                                        <div>
                                            <strong>$499</strong>
                                        </div>
                                        <span className="sold">856 sold</span>
                                    </div>
                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>34 / 80</strong>
                                    </div>
                                    <div className="stock-bar">
                                        <i className="purple-bar" style={{ width: '43%' }} />
                                    </div>
                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>
                                </div>
                            </article>

                            {/* Product 3 */}
                            <article className="premium-card">
                                <div className="visual visual-3">
                                    <span className="discount">-18%</span>
                                    <button className="heart">♡</button>
                                    <div className="product-art">🎧</div>
                                    <div className="floating-label">
                                        <span className="dot orange" />
                                        Hot Deal
                                    </div>
                                </div>
                                <div className="premium-content">
                                    <div className="product-meta">
                                        <span>SONY</span>
                                        <small>AU-4412</small>
                                    </div>
                                    <h2>WH-1000XM Wireless</h2>
                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.7</b>
                                        <small>(542 reviews)</small>
                                    </div>
                                    <div className="price-row">
                                        <div>
                                            <strong>$279</strong>
                                            <del>$339</del>
                                        </div>
                                        <span className="sold">2.4k sold</span>
                                    </div>
                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>16 / 70</strong>
                                    </div>
                                    <div className="stock-bar danger">
                                        <i style={{ width: '23%' }} />
                                    </div>
                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>
                                </div>
                            </article>

                            {/* Product 4 */}
                            <article className="premium-card">
                                <div className="visual visual-4">
                                    <span className="limited">LIMITED</span>
                                    <button className="heart">♡</button>
                                    <div className="product-art">👜</div>
                                    <div className="floating-label">
                                        <span className="dot pink" />
                                        Premium
                                    </div>
                                </div>
                                <div className="premium-content">
                                    <div className="product-meta">
                                        <span>LOUIS</span>
                                        <small>BG-7120</small>
                                    </div>
                                    <h2>Classic Leather Bag</h2>
                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.9</b>
                                        <small>(89 reviews)</small>
                                    </div>
                                    <div className="price-row">
                                        <div>
                                            <strong>$640</strong>
                                        </div>
                                        <span className="sold">312 sold</span>
                                    </div>
                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>9 / 35</strong>
                                    </div>
                                    <div className="stock-bar danger">
                                        <i style={{ width: '26%' }} />
                                    </div>
                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>
                                </div>
                            </article>

                            {/* Product 5 */}
                            <article className="premium-card">
                                <div className="visual visual-5">
                                    <span className="discount">-30%</span>
                                    <button className="heart">♡</button>
                                    <div className="product-art">🕶️</div>
                                    <div className="floating-label">
                                        <span className="dot blue" />
                                        Popular
                                    </div>
                                </div>
                                <div className="premium-content">
                                    <div className="product-meta">
                                        <span>RAY-BAN</span>
                                        <small>AC-8821</small>
                                    </div>
                                    <h2>Classic Black Shades</h2>
                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.6</b>
                                        <small>(218 reviews)</small>
                                    </div>
                                    <div className="price-row">
                                        <div>
                                            <strong>$89</strong>
                                            <del>$127</del>
                                        </div>
                                        <span className="sold">987 sold</span>
                                    </div>
                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>64 / 100</strong>
                                    </div>
                                    <div className="stock-bar">
                                        <i className="blue-bar" style={{ width: '64%' }} />
                                    </div>
                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>
                                </div>
                            </article>

                            {/* Product 6 */}
                            <article className="premium-card">
                                <div className="visual visual-6">
                                    <span className="new">NEW</span>
                                    <button className="heart">♡</button>
                                    <div className="product-art">📷</div>
                                    <div className="floating-label">
                                        <span className="dot green" />
                                        New Arrival
                                    </div>
                                </div>
                                <div className="premium-content">
                                    <div className="product-meta">
                                        <span>SONY</span>
                                        <small>CM-5520</small>
                                    </div>
                                    <h2>Alpha Mirrorless Camera</h2>
                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.9</b>
                                        <small>(76 reviews)</small>
                                    </div>
                                    <div className="price-row">
                                        <div>
                                            <strong>$1,299</strong>
                                        </div>
                                        <span className="sold">184 sold</span>
                                    </div>
                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>21 / 40</strong>
                                    </div>
                                    <div className="stock-bar">
                                        <i className="green-bar" style={{ width: '52%' }} />
                                    </div>
                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>
                                </div>
                            </article>

                            {/* Product 7 */}
                            <article className="premium-card">
                                <div className="visual visual-7">
                                    <span className="discount">-20%</span>
                                    <button className="heart">♡</button>

                                    <div className="product-art">💻</div>

                                    <div className="floating-label">
                                        <span className="dot blue" />
                                        Best Choice
                                    </div>
                                </div>

                                <div className="premium-content">

                                    <div className="product-meta">
                                        <span>DELL</span>
                                        <small>LP-5821</small>
                                    </div>

                                    <h2>Inspiron Pro Laptop</h2>

                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.8</b>
                                        <small>(156 reviews)</small>
                                    </div>

                                    <div className="price-row">
                                        <div>
                                            <strong>$899</strong>
                                            <del>$1,129</del>
                                        </div>

                                        <span className="sold">643 sold</span>
                                    </div>

                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>45 / 70</strong>
                                    </div>

                                    <div className="stock-bar">
                                        <i className="blue-bar" style={{ width: '64%' }} />
                                    </div>

                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>

                                </div>
                            </article>


                            {/* Product 8 */}
                            <article className="premium-card">

                                <div className="visual visual-8">

                                    <span className="new">NEW</span>

                                    <button className="heart">♡</button>

                                    <div className="product-art">📱</div>

                                    <div className="floating-label">
                                        <span className="dot purple" />
                                        New Arrival
                                    </div>

                                </div>

                                <div className="premium-content">

                                    <div className="product-meta">
                                        <span>SAMSUNG</span>
                                        <small>SM-9021</small>
                                    </div>

                                    <h2>Galaxy Ultra 5G</h2>

                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.9</b>
                                        <small>(284 reviews)</small>
                                    </div>

                                    <div className="price-row">
                                        <div>
                                            <strong>$799</strong>
                                        </div>

                                        <span className="sold">1.8k sold</span>
                                    </div>

                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>58 / 90</strong>
                                    </div>

                                    <div className="stock-bar">
                                        <i className="purple-bar" style={{ width: '64%' }} />
                                    </div>

                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>

                                </div>

                            </article>

                            {/* Product 9 */}
                            <article className="premium-card">
                                <div className="visual visual-9">
                                    <span className="discount">-15%</span>
                                    <button className="heart">♡</button>

                                    <div className="product-art">🎮</div>

                                    <div className="floating-label">
                                        <span className="dot orange" />
                                        Gaming Pick
                                    </div>
                                </div>

                                <div className="premium-content">

                                    <div className="product-meta">
                                        <span>PLAYSTATION</span>
                                        <small>PS-5021</small>
                                    </div>

                                    <h2>PlayStation 5 Console</h2>

                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.8</b>
                                        <small>(421 reviews)</small>
                                    </div>

                                    <div className="price-row">
                                        <div>
                                            <strong>$499</strong>
                                            <del>$589</del>
                                        </div>

                                        <span className="sold">2.1k sold</span>
                                    </div>

                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>37 / 60</strong>
                                    </div>

                                    <div className="stock-bar">
                                        <i style={{ width: '62%' }} />
                                    </div>

                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>

                                </div>
                            </article>


                            {/* Product 10 */}
                            <article className="premium-card">
                                <div className="visual visual-10">
                                    <span className="discount">-25%</span>

                                    <button className="heart">♡</button>

                                    <div className="product-art">👗</div>

                                    <div className="floating-label">
                                        <span className="dot pink" />
                                        Trending
                                    </div>
                                </div>

                                <div className="premium-content">

                                    <div className="product-meta">
                                        <span>ZARA</span>
                                        <small>DR-5824</small>
                                    </div>

                                    <h2>Elegant One Piece Dress</h2>

                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.8</b>
                                        <small>(236 reviews)</small>
                                    </div>

                                    <div className="price-row">
                                        <div>
                                            <strong>$149</strong>
                                            <del>$199</del>
                                        </div>

                                        <span className="sold">1.5k sold</span>
                                    </div>

                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>42 / 75</strong>
                                    </div>

                                    <div className="stock-bar">
                                        <i style={{ width: '56%' }} />
                                    </div>

                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>

                                </div>
                            </article>


                            {/* Product 11 */}
                            <article className="premium-card">

                                <div className="visual visual-11">
                                    <span className="discount">-22%</span>

                                    <button className="heart">♡</button>

                                    <div className="product-art">⌨️</div>

                                    <div className="floating-label">
                                        <span className="dot purple" />
                                        Best Choice
                                    </div>
                                </div>

                                <div className="premium-content">

                                    <div className="product-meta">
                                        <span>LOGITECH</span>
                                        <small>KB-4420</small>
                                    </div>

                                    <h2>Mechanical Gaming Keyboard</h2>

                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.6</b>
                                        <small>(186 reviews)</small>
                                    </div>

                                    <div className="price-row">
                                        <div>
                                            <strong>$129</strong>
                                            <del>$165</del>
                                        </div>

                                        <span className="sold">956 sold</span>
                                    </div>

                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>18 / 45</strong>
                                    </div>

                                    <div className="stock-bar danger">
                                        <i style={{ width: '40%' }} />
                                    </div>

                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>

                                </div>
                            </article>


                            {/* Product 12 */}
                            <article className="premium-card">

                                <div className="visual visual-12">

                                    <span className="new">NEW</span>

                                    <button className="heart">♡</button>

                                    <div className="product-art">👠</div>

                                    <div className="floating-label">
                                        <span className="dot purple" />
                                        New Arrival
                                    </div>

                                </div>

                                <div className="premium-content">

                                    <div className="product-meta">
                                        <span>GUCCI</span>
                                        <small>HL-7342</small>
                                    </div>

                                    <h2>Classic Luxury Heels</h2>

                                    <div className="rating">
                                        <span>★★★★★</span>
                                        <b>4.9</b>
                                        <small>(184 reviews)</small>
                                    </div>

                                    <div className="price-row">
                                        <div>
                                            <strong>$389</strong>
                                        </div>

                                        <span className="sold">728 sold</span>
                                    </div>

                                    <div className="stock-row">
                                        <span>Stock</span>
                                        <strong>24 / 50</strong>
                                    </div>

                                    <div className="stock-bar">
                                        <i className="purple-bar" style={{ width: '48%' }} />
                                    </div>

                                    <button className="manage-btn">
                                        Manage Product
                                        <span>→</span>
                                    </button>

                                </div>
                            </article>

                        </div>
                    </section>




                </section>
            </Layout>

        </>
    );
}

export default Products;