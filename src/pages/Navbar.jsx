import React from 'react';
import "../pages/Navbar.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <nav className='navbar'>
            <h1 className='logo'>
                <Link to="/" className='logo-text'>NETFLIX</Link>
            </h1>
            <div className='nav-links'>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/dashboard">User Profile</a>
                
            </div>
        </nav>
    );
};

