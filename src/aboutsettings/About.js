import React,{Fragment,useState} from 'react'
import "./About.css"
import {
  Link,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>
    
    <section className="about">
    <button className='btn btn-secondary' onClick={() => navigate(-1)}>
      <span>&lt;</span> Back
    </button>
    
    <div className="row">
        
    <div className="column">
      <div className="about-img"></div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>About</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Description</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Working</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>ABOUT US</h2>
      <h3>Objectives</h3>
      <p>To develop game ‘Vyapar’ on blockchain platform e.g Hyperledger Fabric to
          demonstrate team preparedness and platform features</p>
       <h3>Key Features</h3>
       <p>Trust among players, Clear definition of rules and its strict
        implementations, transparent transactions and peer to peer direct activity,self-regulation etc
        are key features of game and same is assured by Blockchain technology. So, it’s a fit case for
        demonstration purpose.</p>
    </div>

    {/* Skills Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
      <h2>Description</h2>
      <p>‘Vyapar’ is popular game played by children in age group of 08 -15. Game board
        has various locations mentioned on it. Each location can be own by a player by paying cost of
        ownership to Bank (an independent entity in game). The owner can then charge certain
        amount to other player when he arrives at that location in
        course of game. Multiple players can play the game and the winner is one who owns more
      money.</p>

       <div className="skills-row">

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>Developer</h3>
          <div className="progress">
            <div className="progress-bar">
              <span>80%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>Designer</h3>
          <div className="progress">
            <div className="progress-bar Designer">
              <span>90%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>React JS</h3>
          <div className="progress">
            <div className="progress-bar Javascript">
              <span>85%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>PhotoShop</h3>
          <div className="progress">
            <div className="progress-bar PhotoShop">
              <span>88%</span>
            </div>
          </div>
        </div>
       </div>

       </div>

    </div>

       {/* Experience Content */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>

    <div className="exp-column">
      <h2>How it works!!!</h2>
      <p>To begin with all players are provided with
      certain money to carry out the business. Generally two dices with 1-6 count on each are used
      to determine next move. Game is played in round robin manner.</p>
      <p> There are some special
      events too based on dice value and special location, to make game interesting e.g. Pay Tax ,
      Gift /bonus , lottery or even jail term !. Also each location has different
      cost and earning potential. Skill is to own lucrative locations and earn money when others
      visit/arrive at that location. Owner can even build a house on location and charge rent
      multiple times of base charge.
      </p>
    </div>

    <div className="exp-column">

    </div>

    <div className="exp-column">
      
    </div>
    
    </div>
        
    </div>

    </div>

    </div>

    </section>
    
    </Fragment>
  )
}

export default About