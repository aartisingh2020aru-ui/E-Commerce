import React from "react";
import './Dashboard.css';

import { ToastContainer, toast } from 'react-toastify';
import Sidebar from "./Sidebar";

function Layout({ children }) {
    return (

        <>
            <Sidebar />
            <main className="main">
                <ToastContainer />
                
                <header className="topbar">
                    <div className="search">
                        <input type="text" placeholder="Search anything..." />
                    </div>
                    <div className="admin">
                        <div className="notification">
                            🔔
                        </div>
                        <div className="profile">
                            <img src="https://i.pravatar.cc/100?img=12" alt="Admin" />
                            <div className="profile-info">
                                <strong>John Doe</strong>
                                <small>Administrator</small>
                            </div>
                        </div>
                    </div>
                </header>

                {children}
            </main>

        </>

    );
}

export default Layout;