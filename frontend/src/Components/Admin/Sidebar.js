import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <>
         <aside className="sidebar">
            {/* Logo */}
            <div className="logo">
                <div className="logo-icon">E</div>
                <span>ShopAdmin</span>
            </div>
            {/* Navigation */}
            <nav className="sidebar-nav">
                <p className="menu-title">MAIN MENU</p>
                <Link to="/dashboard" className="nav-link active">
                    <span className="nav-icon">▦</span>
                    <span>Dashboard</span>
                </Link>
                <Link to="/products" className="nav-link">
                    <span className="nav-icon">▤</span>
                    <span>Products</span>
                </Link>
                <Link to="/addproduct" className="nav-link">
                    <span className="nav-icon">▤</span>
                    <span>Add Product</span>
                </Link>
                
            </nav>
           
        </aside>
        </>
    );
}
export default Sidebar;