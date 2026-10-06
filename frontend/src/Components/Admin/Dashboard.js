import Layout from "./Layout";


function Dashboard() {
    return (

        <Layout>
            <section className="content">
                <div className="page-title">
                    <h1>Dashboard</h1>
                    <p>Welcome back, John! Here's what's happening today.</p>
                </div>
                {/* STAT CARDS */}
                <div className="cards">
                    <div className="card">
                        <div className="card-top">
                            <div>
                                <p>Total Revenue</p>
                                <h2>$45,280</h2>
                            </div>
                            <div className="card-icon purple">
                                💰
                            </div>
                        </div>
                        <div className="growth">↑ 12.5% this month</div>
                    </div>
                    <div className="card">
                        <div className="card-top">
                            <div>
                                <p>Total Orders</p>
                                <h2>1,245</h2>
                            </div>
                            <div className="card-icon green">
                                📦
                            </div>
                        </div>
                        <div className="growth">↑ 8.2% this month</div>
                    </div>
                    <div className="card">
                        <div className="card-top">
                            <div>
                                <p>Customers</p>
                                <h2>8,549</h2>
                            </div>
                            <div className="card-icon orange">
                                👥
                            </div>
                        </div>
                        <div className="growth">↑ 6.7% this month</div>
                    </div>
                    <div className="card">
                        <div className="card-top">
                            <div>
                                <p>Products</p>
                                <h2>356</h2>
                            </div>
                            <div className="card-icon blue">
                                🛍️
                            </div>
                        </div>
                        <div className="growth">↑ 4.3% this month</div>
                    </div>
                </div>
                {/* CHART + SALES */}
                <div className="dashboard-grid">
                    <div className="box">
                        <div className="box-header">
                            <h2>Revenue Overview</h2>
                            <select>
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>Last 12 Months</option>
                            </select>
                        </div>
                        <div className="chart">
                            <div className="bar bar1">
                                <span>Mon</span>
                            </div>
                            <div className="bar bar2">
                                <span>Tue</span>
                            </div>
                            <div className="bar bar3">
                                <span>Wed</span>
                            </div>
                            <div className="bar bar4">
                                <span>Thu</span>
                            </div>
                            <div className="bar bar5">
                                <span>Fri</span>
                            </div>
                            <div className="bar bar6">
                                <span>Sat</span>
                            </div>
                            <div className="bar bar7">
                                <span>Sun</span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <h2>Top Categories</h2>
                        </div>
                        <div className="sales-item">
                            <div className="sales-info">
                                <span>Electronics</span>
                                <strong>80%</strong>
                            </div>
                            <div className="progress">
                                <div className="p1" />
                            </div>
                        </div>
                        <div className="sales-item">
                            <div className="sales-info">
                                <span>Fashion</span>
                                <strong>65%</strong>
                            </div>
                            <div className="progress">
                                <div className="p2" />
                            </div>
                        </div>
                        <div className="sales-item">
                            <div className="sales-info">
                                <span>Home &amp; Garden</span>
                                <strong>50%</strong>
                            </div>
                            <div className="progress">
                                <div className="p3" />
                            </div>
                        </div>
                        <div className="sales-item">
                            <div className="sales-info">
                                <span>Sports</span>
                                <strong>35%</strong>
                            </div>
                            <div className="progress">
                                <div className="p4" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* RECENT ORDERS */}
                <div className="table-box">
                    <div className="table-header">
                        <h2>Recent Orders</h2>
                        <a href="#" className="view-btn">
                            View All →
                        </a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Customer</th>
                                <th>Order ID</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product">
                                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" alt="Shoes" />
                                        <span>Nike Air Max</span>
                                    </div>
                                </td>
                                <td>Rahul Sharma</td>
                                <td>#ORD-1024</td>
                                <td>$120</td>
                                <td>Oct 06, 2026</td>
                                <td>
                                    <span className="status delivered">
                                        Delivered
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product">
                                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100" alt="Watch" />
                                        <span>Smart Watch</span>
                                    </div>
                                </td>
                                <td>Priya Singh</td>
                                <td>#ORD-1023</td>
                                <td>$250</td>
                                <td>Oct 05, 2026</td>
                                <td>
                                    <span className="status pending">
                                        Pending
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product">
                                        <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=100" alt="Headphones" />
                                        <span>Headphones</span>
                                    </div>
                                </td>
                                <td>Amit Kumar</td>
                                <td>#ORD-1022</td>
                                <td>$85</td>
                                <td>Oct 05, 2026</td>
                                <td>
                                    <span className="status delivered">
                                        Delivered
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product">
                                        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100" alt="T-Shirt" />
                                        <span>Premium T-Shirt</span>
                                    </div>
                                </td>
                                <td>Neha Verma</td>
                                <td>#ORD-1021</td>
                                <td>$45</td>
                                <td>Oct 04, 2026</td>
                                <td>
                                    <span className="status cancelled">
                                        Cancelled
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

        </Layout>

    );
}

export default Dashboard;