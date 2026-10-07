function Sidebar() {
    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    Admin<span>Panel</span>
                </div>
                <div className="menu-title">Main Menu</div>
                <nav className="menu">
                    <a href="/dashboard" className="active">
                        <div className="icon">📊</div>
                        <span>Dashboard</span>
                    </a>
                    <a href="/products">
                        <div className="icon">🛍️</div>
                        <span>Products</span>
                    </a>
                    <a href="#">
                        <div className="icon">📦</div>
                        <span>Add Products</span>
                    </a>
                    <a href="#">
                        <div className="icon">👥</div>
                        <span>Customers</span>
                    </a>
                    <a href="#">
                        <div className="icon">🏷️</div>
                        <span>Categories</span>
                    </a>
                    <div className="menu-title">Management</div>
                    <a href="#">
                        <div className="icon">💰</div>
                        <span>Payments</span>
                    </a>
                    <a href="#">
                        <div className="icon">📈</div>
                        <span>Analytics</span>
                    </a>
                    <a href="#">
                        <div className="icon">⚙️</div>
                        <span>Settings</span>
                    </a>
                    <a href="#">
                        <div className="icon">🚪</div>
                        <span>Logout</span>
                    </a>
                </nav>
            </aside>

        </>
    );
}
export default Sidebar;