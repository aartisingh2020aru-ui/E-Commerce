import Layout from "./Layout";

function Dashboard() {
    return (
        <>
            <Layout>
                <section className="dashboard-content">
                    {/* Page Heading */}
                    <div className="page-heading">
                        <div>
                            <h2>Overview</h2>
                            <p>Here's what's happening with your store today.</p>
                        </div>
                        <button className="date-btn">
                            📅 October 5, 2026
                        </button>
                    </div>
                    {/* =========================
               STAT CARDS
          ========================== */}
                    <div className="stats-grid">
                        {/* Total Sales */}
                        <div className="stat-card">
                            <div className="stat-top">
                                <div className="stat-icon sales-icon">
                                    ₹
                                </div>
                                <span className="growth positive">
                                    ↑ 12.5%
                                </span>
                            </div>
                            <div className="stat-info">
                                <p>Total Sales</p>
                                <h3>₹2,45,680</h3>
                            </div>
                            <span className="stat-footer">
                                Compared to last month
                            </span>
                        </div>
                        {/* Orders */}
                        <div className="stat-card">
                            <div className="stat-top">
                                <div className="stat-icon order-icon">
                                    #
                                </div>
                                <span className="growth positive">
                                    ↑ 8.2%
                                </span>
                            </div>
                            <div className="stat-info">
                                <p>Total Orders</p>
                                <h3>1,248</h3>
                            </div>
                            <span className="stat-footer">
                                Compared to last month
                            </span>
                        </div>
                        {/* Products */}
                        <div className="stat-card">
                            <div className="stat-top">
                                <div className="stat-icon product-icon">
                                    □
                                </div>
                                <span className="growth positive">
                                    ↑ 5.4%
                                </span>
                            </div>
                            <div className="stat-info">
                                <p>Total Products</p>
                                <h3>356</h3>
                            </div>
                            <span className="stat-footer">
                                Active products
                            </span>
                        </div>
                        {/* Customers */}
                        <div className="stat-card">
                            <div className="stat-top">
                                <div className="stat-icon customer-icon">
                                    ♙
                                </div>
                                <span className="growth positive">
                                    ↑ 10.8%
                                </span>
                            </div>
                            <div className="stat-info">
                                <p>Total Customers</p>
                                <h3>8,942</h3>
                            </div>
                            <span className="stat-footer">
                                Registered customers
                            </span>
                        </div>
                    </div>
                    {/* =========================
               CHART + TOP PRODUCTS
          ========================== */}
                    <div className="dashboard-grid">
                        {/* Sales Overview */}
                        <div className="dashboard-card sales-chart">
                            <div className="card-header">
                                <div>
                                    <h3>Sales Overview</h3>
                                    <p>Monthly sales performance</p>
                                </div>
                                <select>
                                    <option>2026</option>
                                    <option>2025</option>
                                    <option>2024</option>
                                </select>
                            </div>
                            {/* Simple CSS Chart */}
                            <div className="chart">
                                <div className="y-axis">
                                    <span>₹50K</span>
                                    <span>₹40K</span>
                                    <span>₹30K</span>
                                    <span>₹20K</span>
                                    <span>₹10K</span>
                                    <span>₹0</span>
                                </div>
                                <div className="chart-area">
                                    <div className="chart-lines">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <div className="bars">
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '45%' }} />
                                            <small>Jan</small>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '60%' }} />
                                            <small>Feb</small>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '50%' }} />
                                            <small>Mar</small>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '72%' }} />
                                            <small>Apr</small>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '65%' }} />
                                            <small>May</small>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '82%' }} />
                                            <small>Jun</small>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '70%' }} />
                                            <small>Jul</small>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '88%' }} />
                                            <small>Aug</small>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '78%' }} />
                                            <small>Sep</small>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '92%' }} />
                                            <small>Oct</small>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '80%' }} />
                                            <small>Nov</small>
                                        </div>
                                        <div className="bar-group">
                                            <div className="bar" style={{ height: '95%' }} />
                                            <small>Dec</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Top Products */}
                        <div className="dashboard-card">
                            <div className="card-header">
                                <div>
                                    <h3>Top Products</h3>
                                    <p>Best selling products</p>
                                </div>
                                <a href="products.html" className="view-all">
                                    View All
                                </a>
                            </div>
                            <div className="product-list">
                                <div className="product-item">
                                    <div className="product-image">
                                        P1
                                    </div>
                                    <div className="product-details">
                                        <strong>Wireless Headphones</strong>
                                        <span>Electronics</span>
                                    </div>
                                    <div className="product-sales">
                                        <strong>₹4,999</strong>
                                        <span>124 sold</span>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="product-image">
                                        P2
                                    </div>
                                    <div className="product-details">
                                        <strong>Smart Watch</strong>
                                        <span>Electronics</span>
                                    </div>
                                    <div className="product-sales">
                                        <strong>₹3,499</strong>
                                        <span>98 sold</span>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="product-image">
                                        P3
                                    </div>
                                    <div className="product-details">
                                        <strong>Running Shoes</strong>
                                        <span>Fashion</span>
                                    </div>
                                    <div className="product-sales">
                                        <strong>₹2,999</strong>
                                        <span>87 sold</span>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="product-image">
                                        P4
                                    </div>
                                    <div className="product-details">
                                        <strong>Leather Backpack</strong>
                                        <span>Accessories</span>
                                    </div>
                                    <div className="product-sales">
                                        <strong>₹1,899</strong>
                                        <span>72 sold</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =========================
               RECENT ORDERS
          ========================== */}
                    <div className="dashboard-card orders-card">
                        <div className="card-header">
                            <div>
                                <h3>Recent Orders</h3>
                                <p>Latest customer orders</p>
                            </div>
                            <a href="orders.html" className="view-all">
                                View All Orders
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>#ORD-1001</strong>
                                        </td>
                                        <td>
                                            Rahul Sharma
                                        </td>
                                        <td>
                                            Wireless Headphones
                                        </td>
                                        <td>
                                            Oct 05, 2026
                                        </td>
                                        <td>
                                            ₹4,999
                                        </td>
                                        <td>
                                            <span className="status delivered">
                                                Delivered
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>#ORD-1002</strong>
                                        </td>
                                        <td>
                                            Amit Kumar
                                        </td>
                                        <td>
                                            Smart Watch
                                        </td>
                                        <td>
                                            Oct 05, 2026
                                        </td>
                                        <td>
                                            ₹3,499
                                        </td>
                                        <td>
                                            <span className="status pending">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>#ORD-1003</strong>
                                        </td>
                                        <td>
                                            Priya Singh
                                        </td>
                                        <td>
                                            Running Shoes
                                        </td>
                                        <td>
                                            Oct 04, 2026
                                        </td>
                                        <td>
                                            ₹2,999
                                        </td>
                                        <td>
                                            <span className="status shipped">
                                                Shipped
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>#ORD-1004</strong>
                                        </td>
                                        <td>
                                            Neha Gupta
                                        </td>
                                        <td>
                                            Leather Backpack
                                        </td>
                                        <td>
                                            Oct 04, 2026
                                        </td>
                                        <td>
                                            ₹1,899
                                        </td>
                                        <td>
                                            <span className="status cancelled">
                                                Cancelled
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>#ORD-1005</strong>
                                        </td>
                                        <td>
                                            Rohit Verma
                                        </td>
                                        <td>
                                            Bluetooth Speaker
                                        </td>
                                        <td>
                                            Oct 03, 2026
                                        </td>
                                        <td>
                                            ₹2,499
                                        </td>
                                        <td>
                                            <span className="status delivered">
                                                Delivered
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    );
}

export default Dashboard;
