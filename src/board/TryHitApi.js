import React from 'react'
import axios from "axios";
import Axios, { all } from "axios";
import { useEffect, useState } from "react";

export const TryHitApi = () => {

    const[locations,getLocations] = useState([]);
    const TryHitApi = () =>{
        axios.get('http://164.100.111.85/vyapar/api/vyapar/getlocations').then((response)=>{
        const allLocations = response.data.data.game.locations;
           
            console.log(response.data.data.game.locations);
            getLocations(allLocations);
          })
          .catch(error => console.error(`Error: ${error}`)
          );
    }

  return (
    <div>{locations}</div>
  )
}

export default TryHitApi
