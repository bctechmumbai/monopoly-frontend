import React,{ useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti'
import NavbarAft from "../NavbarAft"
//import Winner from './Winner';

export function Confetti() {
  const[windowDimension, setDimension] = useState({width:window.innerWidth, height:window.innerHeight});
  const[Btn, setBtn] = useState(false);
  const [realwinner,setWinner]=('')
  
  const detectSize = () => {
    setDimension({width: window.innerWidth, height:window.innerHeight});

  }

  useEffect(()=>{
    window.addEventListener('resize',detectSize);


    return()=>{
      window.removeEventListener('resize',detectSize);

    }
  }, [windowDimension]);

  const submit= async ()=>{
    const winner=localStorage.getItem("winner")
    setWinner(winner)

  }
  
  return (
    <>

    <NavbarAft/>
<div className="App">
    <button className='end' onClick={()=>{setBtn(!Btn)}}>End game</button>
      {Btn && <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
        tweenDuration={1000}
      />
      
      
      }
        <div>{localStorage.getItem('winner')}</div> </div>
    </>
  );
};

export default Confetti;