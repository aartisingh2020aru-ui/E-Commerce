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

                <section className="content">

                    {/* TOP NAV */}
                    <div className="template-topbar">
                        <span className="hamburger">☰</span>

                        <div className="top-icons">
                            <span>🔔</span>
                            <span>✉️</span>
                            <span>👤</span>
                            <span>▦</span>
                        </div>
                    </div>


                    {/* ================= TOP INVOICE CARDS ================= */}

                    <div className="invoice-cards">

                        <div className="invoice-card invoice-purple">
                            <span>Total Orders</span>
                            <strong>995400+</strong>
                        </div>

                        <div className="invoice-card invoice-pink">
                            <span>Total Purchase</span>
                            <strong>3567+</strong>
                        </div>

                        <div className="invoice-card invoice-orange">
                            <span>Total Visits</span>
                            <strong>28834+</strong>
                        </div>

                        <div className="invoice-card invoice-blue">
                            <span>Total Customer</span>
                            <strong>9878708+</strong>
                        </div>

                    </div>


                    {/* ================= THREE MAIN BOXES ================= */}

                    <div className="template-grid">


                        {/* DAILY SALES */}

                        <div className="template-box daily-sales">

                            <h3>Daily Sales</h3>

                            <div className="sales-values">

                                <div>
                                    <strong>56789</strong>
                                    <span>Online sales</span>
                                </div>

                                <div>
                                    <strong>12345</strong>
                                    <span>Sales in store</span>
                                </div>

                            </div>


                            <div className="sales-legend">

                                <span>
                                    <i className="online"></i>
                                    online
                                </span>

                                <span>
                                    <i className="store"></i>
                                    store
                                </span>

                            </div>


                            {/* GRAPH */}

                            <div className="sales-graph">

                                <svg viewBox="0 0 500 250"
                                    preserveAspectRatio="none">

                                    <path
                                        className="graph-purple"
                                        d="
                        M0 250
                        C20 180, 35 60, 65 45
                        C90 30, 105 180, 135 190
                        C160 195, 180 105, 205 110
                        C230 115, 245 180, 270 170
                        C300 155, 315 105, 340 125
                        C365 145, 380 220, 405 205
                        C430 190, 450 80, 475 90
                        C490 95, 500 130, 500 250
                        Z"
                                    />

                                    <path
                                        className="graph-pink"
                                        d="
                        M0 250
                        C30 160, 45 70, 70 55
                        C95 40, 110 185, 140 180
                        C165 175, 180 120, 205 140
                        C230 160, 245 130, 270 125
                        C300 120, 320 185, 345 180
                        C375 175, 390 120, 410 130
                        C440 140, 465 195, 500 165
                        L500 250
                        Z"
                                    />

                                </svg>

                            </div>

                        </div>


                        {/* ACTIVITY */}

                        <div className="template-box activity-box">

                            <h3>Activity</h3>

                            <div className="activity-list">

                                <div className="activity-item">
                                    <div className="activity-avatar">👨🏻</div>

                                    <div>
                                        <p><b>Dobrick</b> published an article</p>
                                        <small>2 hours ago</small>
                                    </div>
                                </div>


                                <div className="activity-item">
                                    <div className="activity-avatar">👩🏻</div>

                                    <div>
                                        <p><b>Stella</b> created an event</p>
                                        <small>3 hours ago</small>
                                    </div>
                                </div>


                                <div className="activity-item">
                                    <div className="activity-avatar">👨🏻</div>

                                    <div>
                                        <p><b>Peter</b> submitted the reports</p>
                                        <small>1 hours ago</small>
                                    </div>
                                </div>


                                <div className="activity-item">
                                    <div className="activity-avatar">👩🏻</div>

                                    <div>
                                        <p><b>Natella</b> updated the docs</p>
                                        <small>1 hours ago</small>
                                    </div>
                                </div>


                                <div className="activity-item">
                                    <div className="activity-avatar">👨🏻</div>

                                    <div>
                                        <p><b>Tom</b> uploaded the demo</p>
                                        <small>3 hours ago</small>
                                    </div>
                                </div>

                            </div>

                        </div>


                        {/* TRAFFIC */}

                        <div className="template-box traffic-box">

                            <h3>Traffic</h3>

                            <div className="traffic-circle">

                                <div>
                                    <span>1.2 M</span>
                                </div>

                            </div>

                            <h4>Traffic for the day</h4>

                            <p>
                                Traffic through the sources google and facebook for the day
                            </p>


                            <div className="traffic-values">

                                <div>
                                    <strong>40%</strong>

                                    <span>
                                        <i className="facebook"></i>
                                        Facebook
                                    </span>
                                </div>

                                <div>
                                    <strong>60%</strong>

                                    <span>
                                        <i className="google"></i>
                                        Google
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


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


                {/* ================= ADDITIONAL STATISTICS ================= */}

                <div className="extra-dashboard">

                    {/* TOP STATISTICS */}

                    <div className="stats-row">

                        <div className="stat-card">
                            <div className="stat-icon green-icon">↗</div>
                            <div>
                                <strong>8954</strong>
                                <span>Lifetime Sales</span>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon red-icon">▣</div>
                            <div>
                                <strong>7841</strong>
                                <span>Sales Amount</span>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon yellow-icon">$</div>
                            <div>
                                <strong>6521</strong>
                                <span>Total Users</span>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon cyan-icon">✓</div>
                            <div>
                                <strong>325</strong>
                                <span>Total Visits</span>
                            </div>
                        </div>

                    </div>


                    {/* MIDDLE CARDS */}

                    <div className="small-info-grid">

                        <div className="small-info-card">

                            <div>
                                <h4>Statistics</h4>

                                <strong>$10,200</strong>

                                <span>Updated $10m</span>

                                <p>Raised from 85 orders.</p>
                            </div>

                            <div className="square-icon green-square">
                                ≋
                            </div>

                        </div>


                        <div className="small-info-card">

                            <div>
                                <h4>Daily Order</h4>

                                <strong>$2256</strong>

                                <span>Updated $45m</span>

                                <p>Hey, you have reached 1 higher.</p>
                            </div>

                            <div className="square-icon yellow-square">
                                ▣
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </Layout>

    );
}

export default Dashboard;