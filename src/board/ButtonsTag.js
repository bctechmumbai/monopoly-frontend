import React from 'react'
import play from './images/play.png'
import purchase from './images/purchase.png'
import sell from './images/sell.png'
import "./GamePage.css";

export const ButtonsTag = () => {
    const handleClick = event => {
        //  refers to the image element
        console.log(event.target);
      
        console.log('Image clicked');
      };
  return (
    <div className="action">
    
         <img
           src={purchase}
           alt=""
           onClick={handleClick}
           width="50px"
         />
         <img
           src={sell}
           alt=""
           onClick={handleClick}
           width="50px"
         />
    </div>
  )
}

export default ButtonsTag
