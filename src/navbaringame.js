import './App.css';
import { Link} from 'react-router-dom';
import axios from 'axios';

import { useState} from "react";

import * as FaIcons from 'react-icons/fa' ;


const NavbarGame = () => {
    const [navigate, setNavigate] = useState(false);
    const [isloading, setLoading] = useState(false);

    const logout = async () => {
        localStorage.clear();

        setNavigate(true);
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
      setLoading(true)
      console.log((response.data));
      window.confirm(response.data.data.game.winner)
      localStorage.setItem("winner",response.data.data.game.winner)
      setLoading(false)
      setNavigate(true)
    }
    if (response.data.status==="Error"){
      window.confirm(response.data.data.errorMessage)

    }
 
  
   
  
})

    }
    if (isloading) {
      return <div className="App">Loading...</div>;
    }
    const leavegame= async()=>{
        localStorage.removeItem("gameId")
        setNavigate(true)
    }
  return (
    <header className="p-3 bg-dark text-white">
    <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h1>Vyapar: BlockChain</h1>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                
                <li><Link to="/about" className="nav-link px-2 text-white">About Us</Link></li>
                <li><Link to="/contact" className="nav-link px-2 text-white">Contact Us</Link></li>

            </ul>

            <div className="text-end">
            <Link to="/whattodo" className="btn btn-outline-light me-2" onClick={leavegame}>Leave Game</Link>
                <Link to="/gameend" className="btn btn-outline-light me-2" onClick={endgame}>End Game</Link>
              
                <Link to="/login" className="btn btn-outline-light me-2" onClick={logout}>Logout</Link>
            </div>
        </div>
    </div>
</header>
  )
}

export default NavbarGame
