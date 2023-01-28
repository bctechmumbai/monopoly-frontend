import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './Sidebar.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa' ;

export default props => {
  const navigate = useNavigate();
  const logout = async () => {
    localStorage.clear();
  }
  const endgame= async () => {

    const data = ({
  
       "gameId":localStorage.getItem("gameId"),
       "User ": localStorage.getItem("user")
     });
     const config = {
       method: 'post',
       url: '/api/vyapar/endgame/',
       headers: {
         'x-access-token': localStorage.getItem('x-access-token')
       },
       data: data
     };

     axios(config)
 .then((response)=>{
   if(response.data.status==="Success"){
    
     console.log((response.data));
     window.confirm(response.data.data.game.winner)
     localStorage.setItem("winner",response.data.data.game.winner)
     navigate('/gameend');
     
   }
   if (response.data.status==="Error"){
     window.confirm(response.data.data.errorMessage)

   }

 
  
 
})

   }
  
  return (
    <Menu>
      <h1>TASK BAR</h1>
      <a className="menu-item" href="/gamelist">
        Player Profile
      </a>
      <a className="menu-item" href="/whattodo">
        Home
      </a>
      <a className="menu-item"  onClick={endgame}>
        Endgame
      </a>
      <a className="menu-item" href="/login" onClick={logout}>
        Logout
      </a>
      <p className="menu-user">
      <FaIcons.FaUser></FaIcons.FaUser>
        {localStorage.getItem("user")}
      </p>
      
    </Menu>
  );
};