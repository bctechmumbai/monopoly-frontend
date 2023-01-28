import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";
import NavbarAft from "../NavbarAft";


export const GamePlay= () =>{
    const navigate = useNavigate()
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gameid, setGameid] = useState('1');
    //const [navigate, setNavigate] = useState(false);
    const [walletbal, setWalletbal] = useState('');
    const [cookies, setCookie] = useCookies();

    const data = JSON.stringify({
        "message":"Create New Game"
  });
  
  const config = {
    method: 'post',
    url: '/api/vyapar/creategame/',
    headers: { 
    'x-access-token':localStorage.getItem('x-access-token'),},
    data : data
  };
   
    
   

    const submit = async e  => {
        e.preventDefault();

        axios(config)
  .then((response)=>{
   if(response.data.status==="Success"){

    console.log(response.data)
   localStorage.setItem('gameId', (response.data.data.assetId))
   
   navigate('/game-board');
   }
   if(response.data.status==="Error"){
    window.confirm(response.data.data.errorMessage )
    navigate('/whattodo')
    
    
   }
    
    
  })
  


        
    }
 

    
    return( 
        <><NavbarAft /><main className="form-signin">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Start A New Game
                </h1>





               




                <button className="w-100 btn btn-lg btn-primary" type="submit" >Start Playing </button>
            </form>
        </main></>
    )
}




export default GamePlay;
