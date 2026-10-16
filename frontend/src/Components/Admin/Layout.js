import React from "react";
import './Dashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import Sidebar from "./Sidebar";


function Layout({ children }) {
    return (
        <div className="admin-wrapper">
          <Sidebar />
            <main className="main-content">
                <ToastContainer />
                <header className="top-header">
                    <div className="header-left">
                        <button className="menu-btn">
                            ☰
                        </button>
                        <div>
                            <h1>Dashboard</h1>
                            <p>Welcome back, Admin!</p>
                        </div>
                    </div>
                    <div className="header-right">
                        {/* Search */}
                        <div className="search-box">
                            <span>⌕</span>
                            <input type="text" placeholder="Search..." />
                        </div>
                        {/* Notification */}
                        <button className="notification">
                            🔔
                            <span className="notification-dot" />
                        </button>
                        {/* Admin Profile */}
                        <div className="admin-profile">
                            <div className="profile-image">
                                A
                            </div>
                            <div className="profile-info">
                                <strong>Admin</strong>
                                <small>Administrator</small>
                            </div>
                            <span className="profile-arrow">⌄</span>
                        </div>
                    </div>
                </header>
                {children}
            </main>

        </div>
    );
}
export default Layout;