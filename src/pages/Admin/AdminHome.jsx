import React from 'react';
import './AdminHome.css'; 
import { Link } from 'react-router-dom';
const AdminHome = () => {
    return (
        <div className="admin-panel">
        <h1 className="admin-panel-heading">ADMIN PANEL</h1>
        <div className="admin-panel-content">
            <div className="admin-panel-box user-box">
            <Link to="/userdetails"><h2>User</h2></Link>
            </div>
            <div className="admin-panel-box project-box">
            <h2>Project</h2>
            
            </div>
        </div>
        </div>
    );
};

export default AdminHome;
