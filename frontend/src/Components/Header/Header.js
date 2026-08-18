import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header bg-dark text-white shadow">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <h2 className="m-0">My React App</h2>
                    <nav>
                        <Link to ="/" className="text-white text-decoration-none me-4">
                            Home
                        </Link>

                        <Link to ="/about" className="text-white text-decoration-none me-4">
                            About
                        </Link>

                        <Link to ="/contact" className="text-white text-decoration-none me-4">
                            Contact
                        </Link>

                        <Link to ="/blog" className="text-white text-decoration-none">
                            Blog
                        </Link>
                    </nav>
                </div>
            </div>

        </header>
    );
}
export default Header;
