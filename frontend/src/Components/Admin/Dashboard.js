import Layout from "./Layout";
import './Dashboard.css'

function Dashboard() {
    return (
         <div>
            <aside className="sidebar">
                <div className="logo">
                    <div className="logo-icon">
                        <i className="fa-solid fa-bag-shopping" />
                    </div>
                    ShopAdmin
                </div>
                <div className="menu-title">
                    MAIN MENU
                </div>
                <a href="#" className="menu-item active">
                    <i className="fa-solid fa-table-cells-large" />
                    Dashboard
                </a>
                <a href="#" className="menu-item">
                    <i className="fa-solid fa-box" />
                    Products
                    <span className="menu-badge">24</span>
                </a>
                <a href="#" className="menu-item">
                    <i className="fa-solid fa-cart-shopping" />
                    Orders
                    <span className="menu-badge red">8</span>
                </a>
                <a href="#" className="menu-item">
                    <i className="fa-solid fa-users" />
                    Customers
                </a>
                <a href="#" className="menu-item">
                    <i className="fa-solid fa-chart-line" />
                    Analytics
                </a>
                <div className="menu-title">
                    MANAGEMENT
                </div>
                <a href="#" className="menu-item">
                    <i className="fa-solid fa-tag" />
                    Coupons
                </a>
                <a href="#" className="menu-item">
                    <i className="fa-solid fa-star" />
                    Reviews
                </a>
                <a href="#" className="menu-item">
                    <i className="fa-solid fa-truck" />
                    Shipping
                </a>
                <a href="#" className="menu-item">
                    <i className="fa-solid fa-credit-card" />
                    Payments
                </a>
                <div className="menu-title">
                    SYSTEM
                </div>
                <a href="#" className="menu-item">
                    <i className="fa-solid fa-gear" />
                    Settings
                </a>
                <a href="#" className="menu-item">
                    <i className="fa-solid fa-circle-question" />
                    Help Center
                </a>
                <div className="sidebar-bottom">
                    <div className="upgrade">
                        <div className="upgrade-icon">
                            <i className="fa-solid fa-crown" />
                        </div>
                        <h4>Upgrade Plan</h4>
                        <p>
                            Get more features and grow your store.
                        </p>
                        <button>
                            Upgrade Now
                        </button>
                    </div>
                    <a href="#" className="menu-item">
                        <i className="fa-solid fa-right-from-bracket" />
                        Logout
                    </a>
                </div>
            </aside>
            {/* ================= MAIN ================= */}
            <main className="main">
                {/* HEADER */}
                <header className="header">
                    <div className="header-title">
                        <h1>Dashboard</h1>
                        <p>
                            Welcome back, Admin 👋
                        </p>
                    </div>
                    <div className="header-right">
                        <div className="search">
                            <i className="fa-solid fa-magnifying-glass" />
                            <input type="text" placeholder="Search anything..." />
                        </div>
                        <button className="notification">
                            <i className="fa-regular fa-bell" />
                            <span className="notification-dot" />
                        </button>
                        <div className="profile">
                            <img src="https://i.pravatar.cc/100?img=12" alt="Admin" />
                            <div className="profile-text">
                                <strong>John Doe</strong>
                                <span>Administrator</span>
                            </div>
                            <i className="fa-solid fa-chevron-down" style={{ fontSize: 9, color: '#999' }}>
                            </i>
                        </div>
                    </div>
                </header>
                {/* ================= CONTENT ================= */}
                <section className="content">
                    {/* PAGE HEADING */}
                    <div className="page-heading">
                        <div>
                            <h2>Overview</h2>
                            <p>
                                Here's what's happening with your store today.
                            </p>
                        </div>
                        <div className="actions">
                            <button className="btn btn-light">
                                <i className="fa-regular fa-calendar" />
                                Oct 01 - Oct 05, 2026
                            </button>
                            <button className="btn btn-primary">
                                <i className="fa-solid fa-plus" />
                                Add Product
                            </button>
                        </div>
                    </div>
                    {/* ================= STATISTICS ================= */}
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-top">
                                <div className="stat-icon purple">
                                    <i className="fa-solid fa-dollar-sign" />
                                </div>
                                <span className="change up">
                                    <i className="fa-solid fa-arrow-up" />
                                    12.5%
                                </span>
                            </div>
                            <div className="stat-label">
                                Total Revenue
                            </div>
                            <h3>
                                $84,240.00
                            </h3>
                            <div className="stat-footer">
                                Compared to last month
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-top">
                                <div className="stat-icon blue">
                                    <i className="fa-solid fa-cart-shopping" />
                                </div>
                                <span className="change up">
                                    <i className="fa-solid fa-arrow-up" />
                                    8.2%
                                </span>
                            </div>
                            <div className="stat-label">
                                Total Orders
                            </div>
                            <h3>
                                2,480
                            </h3>
                            <div className="stat-footer">
                                Compared to last month
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-top">
                                <div className="stat-icon green">
                                    <i className="fa-solid fa-users" />
                                </div>
                                <span className="change up">
                                    <i className="fa-solid fa-arrow-up" />
                                    5.4%
                                </span>
                            </div>
                            <div className="stat-label">
                                Total Customers
                            </div>
                            <h3>
                                12,840
                            </h3>
                            <div className="stat-footer">
                                Compared to last month
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-top">
                                <div className="stat-icon orange">
                                    <i className="fa-solid fa-chart-line" />
                                </div>
                                <span className="change down">
                                    <i className="fa-solid fa-arrow-down" />
                                    2.1%
                                </span>
                            </div>
                            <div className="stat-label">
                                Conversion Rate
                            </div>
                            <h3>
                                4.82%
                            </h3>
                            <div className="stat-footer">
                                Compared to last month
                            </div>
                        </div>
                    </div>
                    {/* ================= CHART + PRODUCTS ================= */}
                    <div className="dashboard-grid">
                        {/* SALES */}
                        <div className="card">
                            <div className="card-header">
                                <div>
                                    <h3>
                                        Sales Overview
                                    </h3>
                                    <p>
                                        Monthly sales performance
                                    </p>
                                </div>
                                <select className="select">
                                    <option>
                                        Last 7 months
                                    </option>
                                    <option>
                                        Last 30 days
                                    </option>
                                    <option>
                                        Last 12 months
                                    </option>
                                </select>
                            </div>
                            <div className="chart">
                                <div className="y-axis">
                                    <span>$50k</span>
                                    <span>$40k</span>
                                    <span>$30k</span>
                                    <span>$20k</span>
                                    <span>$10k</span>
                                    <span>$0</span>
                                </div>
                                <div className="chart-area">
                                    <div className="lines">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <svg className="chart-svg" viewBox="0 0 700 280" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="gradient" x1={0} y1={0} x2={0} y2={1}>
                                                <stop offset="0%" stopColor="#6c5ce7" stopOpacity=".25" />
                                                <stop offset="100%" stopColor="#6c5ce7" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <path className="area" d="
                              M0 210
                              C50 180 60 190 110 165
                              C150 140 170 155 210 135
                              C250 110 270 120 310 145
                              C350 170 370 125 410 115
                              C450 100 470 75 510 90
                              C550 105 570 70 610 50
                              C650 35 675 60 700 25
                              L700 280
                              L0 280
                              Z
                              " />
                                        <path className="line" d="
                              M0 210
                              C50 180 60 190 110 165
                              C150 140 170 155 210 135
                              C250 110 270 120 310 145
                              C350 170 370 125 410 115
                              C450 100 470 75 510 90
                              C550 105 570 70 610 50
                              C650 35 675 60 700 25
                              " />
                                    </svg>
                                    <div className="chart-labels">
                                        <span>Apr</span>
                                        <span>May</span>
                                        <span>Jun</span>
                                        <span>Jul</span>
                                        <span>Aug</span>
                                        <span>Sep</span>
                                        <span>Oct</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TOP PRODUCTS */}
                        <div className="card">
                            <div className="card-header">
                                <div>
                                    <h3>
                                        Top Products
                                    </h3>
                                    <p>
                                        Best selling products
                                    </p>
                                </div>
                                <a href="#">
                                    View All
                                </a>
                            </div>
                            <div className="products">
                                <div className="product">
                                    <div className="product-img purple">
                                        <i className="fa-solid fa-headphones" />
                                    </div>
                                    <div className="product-info">
                                        <strong>
                                            Wireless Headphones
                                        </strong>
                                        <span>
                                            Electronics
                                        </span>
                                    </div>
                                    <div className="product-price">
                                        <strong>
                                            $12,480
                                        </strong>
                                        <span>
                                            248 sold
                                        </span>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="product-img blue">
                                        <i className="fa-solid fa-mobile-screen" />
                                    </div>
                                    <div className="product-info">
                                        <strong>
                                            Smartphone Pro
                                        </strong>
                                        <span>
                                            Electronics
                                        </span>
                                    </div>
                                    <div className="product-price">
                                        <strong>
                                            $10,240
                                        </strong>
                                        <span>
                                            128 sold
                                        </span>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="product-img green">
                                        <i className="fa-solid fa-shirt" />
                                    </div>
                                    <div className="product-info">
                                        <strong>
                                            Premium T-Shirt
                                        </strong>
                                        <span>
                                            Fashion
                                        </span>
                                    </div>
                                    <div className="product-price">
                                        <strong>
                                            $8,920
                                        </strong>
                                        <span>
                                            356 sold
                                        </span>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="product-img orange">
                                        <i className="fa-solid fa-shoe-prints" />
                                    </div>
                                    <div className="product-info">
                                        <strong>
                                            Running Shoes
                                        </strong>
                                        <span>
                                            Sports
                                        </span>
                                    </div>
                                    <div className="product-price">
                                        <strong>
                                            $7,680
                                        </strong>
                                        <span>
                                            192 sold
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================= RECENT ORDERS ================= */}
                    <div className="card orders">
                        <div className="card-header">
                            <div>
                                <h3>
                                    Recent Orders
                                </h3>
                                <p>
                                    Latest orders from your customers
                                </p>
                            </div>
                            <a href="#">
                                View All Orders
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                        </div>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Customer</th>
                                        <th>Product</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>#ORD-10248</strong>
                                        </td>
                                        <td>
                                            <div className="customer">
                                                <img src="https://i.pravatar.cc/80?img=32" alt />
                                                Sarah Wilson
                                            </div>
                                        </td>
                                        <td>
                                            Wireless Headphones
                                        </td>
                                        <td>
                                            Oct 05, 2026
                                        </td>
                                        <td>
                                            <strong>$129.00</strong>
                                        </td>
                                        <td>
                                            <span className="status delivered">
                                                Delivered
                                            </span>
                                        </td>
                                        <td>
                                            <button className="more">
                                                <i className="fa-solid fa-ellipsis" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>#ORD-10247</strong>
                                        </td>
                                        <td>
                                            <div className="customer">
                                                <img src="https://i.pravatar.cc/80?img=44" alt />
                                                Michael Brown
                                            </div>
                                        </td>
                                        <td>
                                            Smartphone Pro
                                        </td>
                                        <td>
                                            Oct 05, 2026
                                        </td>
                                        <td>
                                            <strong>$899.00</strong>
                                        </td>
                                        <td>
                                            <span className="status processing">
                                                Processing
                                            </span>
                                        </td>
                                        <td>
                                            <button className="more">
                                                <i className="fa-solid fa-ellipsis" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>#ORD-10246</strong>
                                        </td>
                                        <td>
                                            <div className="customer">
                                                <img src="https://i.pravatar.cc/80?img=47" alt />
                                                Emily Davis
                                            </div>
                                        </td>
                                        <td>
                                            Premium T-Shirt
                                        </td>
                                        <td>
                                            Oct 04, 2026
                                        </td>
                                        <td>
                                            <strong>$59.00</strong>
                                        </td>
                                        <td>
                                            <span className="status shipped">
                                                Shipped
                                            </span>
                                        </td>
                                        <td>
                                            <button className="more">
                                                <i className="fa-solid fa-ellipsis" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>#ORD-10245</strong>
                                        </td>
                                        <td>
                                            <div className="customer">
                                                <img src="https://i.pravatar.cc/80?img=5" alt />
                                                James Anderson
                                            </div>
                                        </td>
                                        <td>
                                            Running Shoes
                                        </td>
                                        <td>
                                            Oct 04, 2026
                                        </td>
                                        <td>
                                            <strong>$120.00</strong>
                                        </td>
                                        <td>
                                            <span className="status pending">
                                                Pending
                                            </span>
                                        </td>
                                        <td>
                                            <button className="more">
                                                <i className="fa-solid fa-ellipsis" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>#ORD-10244</strong>
                                        </td>
                                        <td>
                                            <div className="customer">
                                                <img src="https://i.pravatar.cc/80?img=16" alt />
                                                Olivia Martin
                                            </div>
                                        </td>
                                        <td>
                                            Smart Watch
                                        </td>
                                        <td>
                                            Oct 03, 2026
                                        </td>
                                        <td>
                                            <strong>$249.00</strong>
                                        </td>
                                        <td>
                                            <span className="status delivered">
                                                Delivered
                                            </span>
                                        </td>
                                        <td>
                                            <button className="more">
                                                <i className="fa-solid fa-ellipsis" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* ================= BOTTOM CARDS ================= */}
                    <div className="bottom-grid">
                        {/* NEW CUSTOMERS */}
                        <div className="card">
                            <div className="card-header">
                                <div>
                                    <h3>
                                        New Customers
                                    </h3>
                                    <p>
                                        Recently registered customers
                                    </p>
                                </div>
                                <a href="#">
                                    View All
                                </a>
                            </div>
                            <div className="customer-list">
                                <div className="customer-row">
                                    <img src="https://i.pravatar.cc/80?img=49" alt />
                                    <div>
                                        <strong>
                                            Jessica Taylor
                                        </strong>
                                        <span>
                                            jessica@example.com
                                        </span>
                                    </div>
                                    <small>
                                        Today
                                    </small>
                                </div>
                                <div className="customer-row">
                                    <img src="https://i.pravatar.cc/80?img=11" alt />
                                    <div>
                                        <strong>
                                            Daniel Thomas
                                        </strong>
                                        <span>
                                            daniel@example.com
                                        </span>
                                    </div>
                                    <small>
                                        Today
                                    </small>
                                </div>
                                <div className="customer-row">
                                    <img src="https://i.pravatar.cc/80?img=20" alt />
                                    <div>
                                        <strong>
                                            Emma Johnson
                                        </strong>
                                        <span>
                                            emma@example.com
                                        </span>
                                    </div>
                                    <small>
                                        Yesterday
                                    </small>
                                </div>
                                <div className="customer-row">
                                    <img src="https://i.pravatar.cc/80?img=14" alt />
                                    <div>
                                        <strong>
                                            Robert Smith
                                        </strong>
                                        <span>
                                            robert@example.com
                                        </span>
                                    </div>
                                    <small>
                                        Yesterday
                                    </small>
                                </div>
                            </div>
                        </div>
                        {/* INVENTORY */}
                        <div className="card">
                            <div className="card-header">
                                <div>
                                    <h3>
                                        Inventory Status
                                    </h3>
                                    <p>
                                        Current stock overview
                                    </p>
                                </div>
                                <a href="#">
                                    Manage
                                </a>
                            </div>
                            <div className="inventory">
                                <div className="inventory-item">
                                    <div className="inventory-label">
                                        <span>
                                            In Stock
                                        </span>
                                        <strong>
                                            68%
                                        </strong>
                                    </div>
                                    <div className="progress">
                                        <span className="progress-green" />
                                    </div>
                                </div>
                                <div className="inventory-item">
                                    <div className="inventory-label">
                                        <span>
                                            Low Stock
                                        </span>
                                        <strong>
                                            22%
                                        </strong>
                                    </div>
                                    <div className="progress">
                                        <span className="progress-orange" />
                                    </div>
                                </div>
                                <div className="inventory-item">
                                    <div className="inventory-label">
                                        <span>
                                            Out of Stock
                                        </span>
                                        <strong>
                                            10%
                                        </strong>
                                    </div>
                                    <div className="progress">
                                        <span className="progress-red" />
                                    </div>
                                </div>
                            </div>
                            <div className="inventory-footer">
                                <div className="inventory-stat">
                                    <span className="dot dot-green" />
                                    <span>
                                        In Stock
                                    </span>
                                    <strong>
                                        1,284
                                    </strong>
                                </div>
                                <div className="inventory-stat">
                                    <span className="dot dot-orange" />
                                    <span>
                                        Low Stock
                                    </span>
                                    <strong>
                                        416
                                    </strong>
                                </div>
                                <div className="inventory-stat">
                                    <span className="dot dot-red" />
                                    <span>
                                        Out of Stock
                                    </span>
                                    <strong>
                                        188
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER */}
                    <footer className="footer">
                        <span>
                            © 2026 ShopAdmin. All rights reserved.
                        </span>
                        <div className="footer-links">
                            <a href="#">
                                Privacy Policy
                            </a>
                            <a href="#">
                                Terms
                            </a>
                            <a href="#">
                                Support
                            </a>
                        </div>
                    </footer>
                </section>
            </main>
        </div>


    );
}

export default Dashboard;