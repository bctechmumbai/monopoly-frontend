import React from 'react'
import { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Navbar.css'
import gamerImage from './images/gamer.png'
import { NavLink, useNavigate } from 'react-router-dom'
export const NavBar = () => {

  const [user, setUser] = useState([]);
 const navigate = useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
     setUser(user);
    }
  }, []);
  console.log(user)

    const navLinkStyles = ({ isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
            
        }
    }
    let username = JSON.parse(localStorage.getItem('email'));
console.log(username);
  return (
    <>
    <nav className='navbar'>
      <div className='containerone'>
        <div className='title'>Block Chain Based Vyapar</div>
        <div className='nav-elements'>
          <ul>
          <li><button onClick={() => navigate('/')}>Log out</button></li>

            <li><img src={gamerImage} alt="" width="30" height="30"/>  Logged in: {localStorage.getItem('username')}</li>
          </ul>
        </div>
      </div>
   
      
    </nav>
    </>
  )
}

