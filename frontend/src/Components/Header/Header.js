import "./Header.css";

function Header() {
    return (
        <header className="header bg-dark text-white shadow">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <h2 className="m-0">My React App</h2>
                    <nav>
                        <a href="/" className="text-white text-decoration-none me-4">
                            Home
                        </a>

                        <a href="/" className="text-white text-decoration-none me-4">
                            About
                        </a>

                        <a href="/" className="text-white text-decoration-none">
                            Contact
                        </a>
                    </nav>
                </div>
            </div>

        </header>
    );
}
export default Header;
