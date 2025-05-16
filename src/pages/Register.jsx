import React, {useState} from 'react';
import axios from '../axios';
import "../pages/Auth.css";
import "./Footer.css";
import {Navbar} from "./Navbar";
import { Footer } from "./Footer";



export const Register = () => {

    const [form, setForm] = useState({ email: "", password: ""});

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e)=> {
        e.preventDefault();

        if(form.password !== form.confirmPassword){
            alert("Passwords are not matching");
            return;
        }

        try{
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/users`, form);

            alert('user registered');
            console.log(res.data);
        }catch (err){
            console.error(err);
            alert('error creating user');
        }
    }

    return (
    <>
    <Navbar/>
    <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter your email" value={form.email} required onChange={handleChange}/>
            <input type="password" name="password" placeholder="Enter your password" value={form.password} required onChange={handleChange}/>
            <input type="password" name="confirmPassword" placeholder="Confirm your password by re-typing"value={form.confirmPassword} onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    </div>
    <div className="last"><Footer/></div>   
    </>)
}

