import axios from "axios";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import React from 'react';



export const JoinGameUsingId = () => {
    
   const [isLoading,setLoading]=useState(false);
    const [navigate, setNavigate] = useState(false);

    const data = ({
        "gameId":localStorage.getItem('gameId'),
        "User": localStorage.getItem('user')
      });
      
      const config = {
        method: 'post',
        url: '/api/vyapar/joingame/',
        headers: { 
        'x-access-token': localStorage.getItem('x-access-token')   }, data : data
      };
      
      const submit = async e =>{
        console.log('submit called')
       axios(config)
        .then((response)=>{
          setLoading(true);
         // const allPlayers = response.data.data.game.players;
         console.log((response.data));
         
          setLoading(false);
          
          
        })
        setNavigate(true);
    }
   if (navigate) {
        return <Navigate to="/game-board"/>;
    }
    if (isLoading) {
      return <div className="App">Loading...</div>;
    }

      
      
      
      
    
 
  return (
   
    <main className="form-signin">
    <form onSubmit={submit}>
    <h1 className="h3 mb-3 fw-normal">Do You want To join The Game :{localStorage.getItem("gameId")}</h1>
    

            <button className="w-100 btn btn-lg btn-primary" type="submit">Yes Join!!</button>

    </form>
</main>


  )
}

export default JoinGameUsingId;
