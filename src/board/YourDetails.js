import React, { useEffect } from "react";
import yourdetails from "./images/yourdetails.png";
import "./YourDetails.css";
import { useState } from "react";


export default function CurrentPlayer(props) {
  console.log(props);

  const displayCard=(props)=>{
    const {loggedInPlayer} =props;
    const {OwnedAssets}=props;
    console.log(OwnedAssets)
    console.log(loggedInPlayer)
    if(loggedInPlayer.length >0){
     return(<>
     <div className="ajunek">
      <div className="playercard" style={{ height: "320px", width: "200px" }}>
      <img
        src={yourdetails}
        alt="BigCo Inc. logo"
        style={{
          height: "100px",
          width: "150px",
          position: "relative",
          left: "10px",
          top:"5px"
        }}
      />
      <br />
      
      <h4>Player: {loggedInPlayer[0].userId} </h4><br/>
      Wallet Balance: {loggedInPlayer[0].walletBalance} <br/> 
      Current Place: {loggedInPlayer[0].currentPlace} <br/>
      Assets:
      {OwnedAssets.map(place=><h5 key={place.placeSequence}>{place.placeName}</h5>)}
     
     
    </div>
    </div>
      </>
     )
    }else{
      return <h6>no player</h6>
    }

  };
/*
  useEffect(() => {
    const {details} = props
    console.log(props);
    getLoggedInPlayerProp(details);
  }, []);
  const playerDetails = props;
  console.log(playerDetails);
*/
  return <>{displayCard(props)}</>
}