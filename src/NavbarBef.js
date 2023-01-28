import './App.css';
import { Link} from 'react-router-dom';

import axios from "axios";

import { useState} from "react";


import * as FaIcons from 'react-icons/fa' ;



const NavbarBef = () => {
    const [navigate, setNavigate] = useState(false);

  
  return (
    <header className="p-3 bg-dark text-white">
    <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
           <h1> Vyapar: BlockChain</h1>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
               
                <li><Link to="/about" className="nav-link px-2 text-white">About Us</Link></li>
                <li><Link to="/contact" className="nav-link px-2 text-white">Contact Us</Link></li>

            </ul>

            <div className="text-end">
                
                <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                <Link to="/register" className="btn btn-outline-light me-2">Register</Link>
               
            </div>
        </div>
    </div>
</header>
  )
}

export default NavbarBef
