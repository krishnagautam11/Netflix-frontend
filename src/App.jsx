import { useState, useEffect, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./pages/Navbar";
import { Dashboard } from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import { SearchMovies } from './pages/Search';


const App = () => {

  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>} />
        <Route path="/search" element={<SearchMovies/>}/>


      </Routes>


    </BrowserRouter>
  )
}

export default App
