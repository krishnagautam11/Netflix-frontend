import React, { useState } from "react";
import "../pages/Dashboard.css";



export const Dashboard = () => {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <>
            <div className="dashboard-page">
                <h1 className="dashboard-heading">Welcome to Dashboard</h1>
                <p className="dashboard-text">This is a Protected Route - only visible if youre logged in</p>
                <button className="dashboard-btn" onClick={handleLogout}>Logout</button>
            </div>

           
        </>
    )
}