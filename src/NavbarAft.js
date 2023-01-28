import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";

import * as FaIcons from 'react-icons/fa' ;



const NavbarBef = () => {
    const navigate = useNavigate();
    const username=localStorage.getItem('user')

    const logout = async () => {
        localStorage.clear();
//issue here
       navigate('./login')


        
    }
  return (
    <header className="p-3 bg-dark text-white">
    <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <h2><FaIcons.FaUser></FaIcons.FaUser></h2>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><h2>  {username}</h2></li>
                <li><Link to="/about" className="nav-link px-2 text-white">About Us</Link></li>
                <li><Link to="/contact" className="nav-link px-2 text-white">Contact Us</Link></li>

            </ul>

            <div className="text-end">
                <Link to="/newgame" className="btn btn-outline-light me-2">Start</Link>
              
                <Link to="/login" className="btn btn-outline-light me-2" onClick={logout}>Logout</Link>
            </div>
        </div>
    </div>
</header>
  )
}

export default NavbarBef
