import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from 'react-bootstrap';

function LandingPage() {
   const navigate= useNavigate()
  return (
    <>
    <div style={{
            position: 'absolute',
               left: '50%',
               top: '50%',
               transform: 'translate(-50%, -50%)'
        }}><h1>Welcome To Vyapar</h1>
    <Button onClick={() => navigate('log-in')} >Get Started</Button>
    </div>
    </>
  )
}

export default LandingPage