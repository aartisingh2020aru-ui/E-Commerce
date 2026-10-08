import Layout from "./Layout";
import './AddProduct.css';
import React, { useState } from "react";


import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.jpg";
import image5 from "./Images/image5.jpg";
import image6 from "./Images/image6.jpg";
import image7 from "./Images/image7.jpg";
import image8 from "./Images/image8.jpg";
import image9 from "./Images/image9.jpg";
import image10 from "./Images/image10.jpg";
import image11 from "./Images/image11.jpg";
import image12 from "./Images/image12.jpg";



function AddProduct() {
    return (

        <Layout>
            <div className="page">
                {/* ================= LEFT FILTER PANEL ================= */}
                <aside className="filter-panel">

                    {/* Filter Heading */}
                    <div className="filter-heading">
                        <h3>Filter</h3>
                        <span>Clear All</span>
                    </div>
                    {/* Categories */}
                    <div className="filter-section">
                        <div className="filter-title">
                            <span>Categories</span>
                            <span>⌄</span>
                        </div>
                        <div className="options">
                            <label>
                                <input type="checkbox" />
                                All Categories
                            </label>
                            <label>
                                <input type="checkbox" />
                                Fashion Men, Women &amp; Kids
                            </label>
                            <label>
                                <input type="checkbox" />
                                Eye Ware &amp; Sunglass
                            </label>
                            <label>
                                <input type="checkbox" />
                                Watches
                            </label>
                            <label>
                                <input type="checkbox" />
                                Electronics Items
                            </label>
                            <label>
                                <input type="checkbox" />
                                Furniture
                            </label>
                            <label>
                                <input type="checkbox" />
                                Headphones
                            </label>
                            <label>
                                <input type="checkbox" />
                                Beauty &amp; Health
                            </label>
                            <label>
                                <input type="checkbox" />
                                Foot Ware
                            </label>
                        </div>
                    </div>
                    {/* Product Price */}
                    <div className="filter-section">
                        <div className="filter-title">
                            <span>Product Price</span>
                            <span>⌄</span>
                        </div>
                        <div className="options">
                            <label>
                                <input type="checkbox" />
                                All Price
                            </label>
                            <label>
                                <input type="checkbox" />
                                Below $200 (145)
                            </label>
                            <label>
                                <input type="checkbox" />
                                $200-$500 (1,885)
                            </label>
                            <label>
                                <input type="checkbox" />
                                $500-$800 (2,276)
                            </label>
                            <label>
                                <input type="checkbox" />
                                $800-$1000 (12,126)
                            </label>
                            <label>
                                <input type="checkbox" />
                                $1000-$1100 (13,123)
                            </label>
                            <label>
                                <input type="checkbox" />
                                All Categories
                            </label>
                        </div>
                    </div>
                    {/* Custom Price Range */}
                    <div className="custom-price">
                        <p>Custom Price Range</p>
                        <div className="range-line">
                            <div className="range-track" />
                            <span className="range-dot left" />
                            <span className="range-dot right" />
                        </div>
                        <div className="price-inputs">
                            <div>
                                <span>$</span>
                                <input type="text" defaultValue={34} />
                            </div>
                            <span>To</span>
                            <div>
                                <span>$</span>
                                <input type="text" defaultValue={34} />
                            </div>
                        </div>
                    </div>
                    {/* Size & Fit */}
                    <div className="filter-section size-section">
                        <div className="filter-title">
                            <span>Size &amp; Fit</span>
                            <span>⌄</span>
                        </div>
                        <div className="size-options">
                            <button>XS</button>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </div>
                    </div>
                </aside>

                <div className="product-container">

                    {/* Product 1 */}
                    <div className="product-card">
                        <div className="product-image">
                            <img src={image1} alt="serum" />                                                                                                                                                                                                                                                                                                                    
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$80</span>
                                <span className="old-price">$100</span>
                                <span className="rating">⭐ 5.0</span>
                            </div>
                            <h3>Men's face serum</h3>
                            <p>
                                Classic men's slim fit black t-shirt designed for
                                everyday comfort and style.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>

                    {/* Product 2*/}
                    <div className="product-card">
                        <div className="product-image">
                            <img src={image2} alt="watch" />
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$76</span>
                                <span className="old-price">$100</span>
                                <span className="rating">⭐ 5.0</span>
                            </div>
                            <h3>Couple collection</h3>
                            <p>
                                Women's Fastival collection watch , perfect for
                                evening events and special occasions.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>


                    {/* Product 3 */}
                    <div className="product-card">
                        <div className="product-image">
                            <img src={image3} alt="headphone" />
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$136</span>
                                <span className="old-price">$150</span>
                                <span className="rating">⭐ 4.1</span>
                            </div>
                            <h3>Olive Green Leather Bag</h3>
                            <p>
                                Elegant olive green leather bag crafted for
                                everyday style and sophistication.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className="product-card">
                        <div className="product-image">                                                             
                            <img src={image4} alt="Product 3" />
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$219</span>
                                <span className="old-price">$250</span>
                                <span className="rating">⭐ 5.0</span>
                            </div>
                            <h3>Women Golden Dress</h3>
                            <p>
                                Stunning golden dress for women, perfect for
                                evening events and special occasions.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>

                    {/* Product 5 */}
                    <div className="product-card">
                        <div className="product-image">
                            <img src={image5} alt="maroon dress" />
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$76</span>
                                <span className="old-price">$100</span>
                                <span className="rating">⭐ 5.0</span>
                            </div>
                            <h3>Women's eligent nigth party dress</h3>
                            <p>
                                Stunning maroon dress for women, perfect for
                                night events and special occasions.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>

                    {/* Product 6 */}
                    <div className="product-card">
                        <div className="product-image">
                            <img src={image6} alt="leather bag" />
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$76</span>
                                <span className="old-price">$100</span>
                                <span className="rating">⭐ 5.0</span>
                            </div>
                            <h3>Women's hand bag</h3>
                            <p>
                                Stunning leather bag for women, perfect for
                                night events and special occasions.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>

                     {/* Product 7 */}
                    <div className="product-card">
                        <div className="product-image">
                            <img src={image7} alt="wedding shoe" />
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$76</span>
                                <span className="old-price">$100</span>
                                <span className="rating">⭐ 5.0</span>
                            </div>
                            <h3>Women's hand bag</h3>
                            <p>
                                Unique wedding shoe for women, perfect for
                                night events and special occasions.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>

                     {/* Product 8 */}
                    <div className="product-card">
                        <div className="product-image">
                            <img src={image8} alt="net saree" />
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$76</span>
                                <span className="old-price">$100</span>
                                <span className="rating">⭐ 5.0</span>
                            </div>
                            <h3>Women's hand bag</h3>
                            <p>
                                Stunning fastival collection saree for women, perfect for
                                evening events and special occasions.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>

                     {/* Product 9*/}
                    <div className="product-card">
                        <div className="product-image">
                            <img src={image9} alt="jwellery" />
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$76</span>
                                <span className="old-price">$100</span>
                                <span className="rating">⭐ 5.0</span>
                            </div>
                            <h3>Women's Embroidery</h3>
                            <p>
                                Embroidery fastival collection jwellery for women, perfect for
                                evening events and special occasions.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>

                    {/* Product 10*/}
                    <div className="product-card">
                        <div className="product-image">
                            <img src={image10} alt="couple collection" />
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$76</span>
                                <span className="old-price">$100</span>
                                <span className="rating">⭐ 5.0</span>
                            </div>
                            <h3>Couple collection</h3>
                            <p>
                                Fastival collection dress for couple, perfect for
                                evening events and special occasions.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>

                     {/* Product 11*/}
                    <div className="product-card">
                        <div className="product-image">
                            <img src={image11} alt="jwellery" />
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$76</span>
                                <span className="old-price">$100</span>
                                <span className="rating">⭐ 5.0</span>
                            </div>
                            <h3>Women's Embroidery</h3>
                            <p>
                                Embroidery fastival collection jwellery for women, perfect for
                                evening events and special occasions.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>

                    {/* Product 12*/}
                    <div className="product-card">
                        <div className="product-image">
                            <img src={image12} alt="collection" />
                        </div>
                        <div className="product-info">
                            <div className="price-row">
                                <span className="price">$76</span>
                                <span className="old-price">$100</span>
                                <span className="rating">⭐ 5.0</span>
                            </div>
                            <h3>Couple collection</h3>
                            <p>
                                Men's Fastival collection dress , perfect for
                                evening events and special occasions.
                            </p>
                            <button className="cart-btn">🛒 Add to cart</button>
                        </div>
                    </div>

                  
                </div>


            </div>                                                                          
        </Layout>                                                                                                                                                                                                   


    );
}
export default AddProduct;