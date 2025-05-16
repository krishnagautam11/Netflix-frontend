import React, { useState, useEffect } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom"; // Import to redirect to a different page
import "../pages/Auth.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/dashboard"); // auto-redirect if already logged in
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      // Sending login request to backend
      const res = await axios.post("/login", form);

      // Storing token in localStorage
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
      navigate("/dashboard"); // Redirect to home page or dashboard
    } catch (err) {
      console.error(err);
      alert("Invalid credentials or login failed");
    }
    console.log(form);
  };


  return (
    <>
      <Navbar />
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    <div className="last"><Footer/></div>  
    </>
  );
};
