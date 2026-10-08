import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    Admin<span>Panel</span>
                </div>
                <div className="menu-title">Main Menu</div>
                <nav className="menu">
                    <Link to="/dashboard" className="active">
                        <div className="icon">📊</div>
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/products">
                        <div className="icon">🛍️</div>
                        <span>Products</span>
                    </Link>
                    <Link to="/addproduct">
                        <div className="icon">📦</div>
                        <span>Add Products</span>
                    </Link>
                   
                   
                </nav>
            </aside>

        </>
    );   
}
export default Sidebar;