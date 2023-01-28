import React,{useState} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import sound from "./files/m3.mp3"

import "./Settings.css"

function Sound() {
    const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div>
      <div className='music'>
          <h4>Sound Effect</h4>
            <button onClick={()=>setIsOpen(!isOpen)} type="button" className="b1">
            {isOpen ? "Playing" : "Paused"}
            </button>
            {isOpen && <ReactAudioPlayer src={sound} autoPlay={true} loop={true} />} 
          </div>
    </div>
  )
}

export default Sound
