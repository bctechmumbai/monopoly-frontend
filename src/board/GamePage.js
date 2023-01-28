import axios from "axios";
import React from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Die from './Die'
import "./RollDice.css";
import { useEffect, useState } from "react";
import Board from "./Board";
import LOC from "./images/gamer.png";
import Dashboard from "./Dashboard";
import GameList from "./GameList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import "./GamePage.css";
import NavbarAft from "../NavbarAft";
import UncontrolledExample from "./Rules";
import Dice from "./Dice";

import ButtonsTag from "./ButtonsTag";
import NavbarGame from "../navbaringame";
import PurchaseModal from "./modal/PurchaseModal";
import CurrentPlayer from "./YourDetails";
import Sidebar from './Sidebar';
import RollDice from "./RollDice";
import ToggleVisibility from "./ToggleVisibility";
import GlowButton from "./GlowButton";
import Locationcard from "./Locationcard";
import  ibutton from "./images/information-button.png"


function GamePage33() {
  

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const gameIdClicked = localStorage.getItem("gameId")
    console.log(gameIdClicked)
    //getAllPlayers();
    //getNewBoard();
    getGameData(gameIdClicked);

  }, []
  );
  const [show, setShow] = useState(false);
  const [OwnedAssets, getOwnedAssets] = useState([]);
  const [loggedInPlayer, getLoggedInPlayer] = useState([]);
  const [locations, setLocations] = useState([]);
  const [watch, Display] = useState();
  const [currentLoc, CurrentLOC] = useState('');
  const [move, NextMove] = useState();
  //const [locations, getLocations] = useState([]);
  const [players, setPlayers] = useState([]);
  const [allGamesList, setAllGamesList] = useState([]);
  const [createdBy, setCreatedBy] = useState();
  const [modalShow, setModelShow] = useState(false);
  const [ownerloc, setOwner] = useState([]);
  const [moveNext, setMoveNext] = useState('');
  const [modelShow, setModalShow] = React.useState(false);
  //const [OwnedAssets,getOwnedAssets] = useState([]);
  //const [players, getPlayers] = useState([]);
  const [nextMoveState, getNextMove] = useState();
  //const [loggedInPlayer, getLoggedInPlayer] = useState([]);
  const [nextMovePlayer, getNextMovePlayer] = useState([]);
  var diceRes=parseInt(localStorage.getItem("diceResult"))

  const data = JSON.stringify({
    "message": "get all locations"
  });
  const data1 = ({
    "gameId": localStorage.getItem("gameId"),
    "diceResult":diceRes,
    "User": "lahu@nic.in Added Just for session Identity"
  });

  const config = {
    method: 'post',
    url: '/api/vyapar/getlocations/',
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    },
    data: data
  };
  const config1 = {
    method: 'post',
    url: '/api/vyapar/playgame/',
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    },
    data: data1
  };
  const data2 = ({
    "message": "Get details of all games"
  });
  const config2 = {
    method: 'post',
    url: '/api/vyapar/getgames/',
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    },
    data: data2
  };

  const getAllPlayers = async () => {
    await axios(config)
      .then((response) => {
        // const allPlayers = response.data.data.game.players;

        for (let i = 0; i < 36; i++) {
          locations.push(response.data.data[i].assetData);
        }
        // getPlayers(allPlayers);
        //console.log(response);
        //console.log(response.data.data.assetData);
        //getLocations(allLocations);


      })
      .catch(error => console.error(`Error: ${error}`)
      );
  }
  const getGameData = async (gameIdClicked) => {
    axios(config2)
      .then((response) => {
        if (response.data.status === "Success") {

          console.log(response.data);
          const allGames = response.data.data
          console.log(allGames);
          setAllGamesList(allGames);
          const particularResponse = allGames.filter((game) => game.assetData.assetId === gameIdClicked)
          console.log(particularResponse)
          const allLocations = particularResponse[0].assetData.locations
          const move = particularResponse[0].assetData.nextMove
          setMoveNext(move)
          const allOwners = allLocations.filter((owner) => owner.placeOwner === localStorage.getItem("user"))
          console.log(allOwners)
          getOwnedAssets(allOwners);
          const allPlayers = particularResponse[0].assetData.players
          const createdByVariable = particularResponse[0].assetData.createdBy
          setCreatedBy(createdByVariable);
          setLocations(allLocations);
          setPlayers(allPlayers);
          setOwner(allOwners);
          getOwnedAssets(allOwners);
          const nextMove = particularResponse[0].assetData.nextMove;
          getNextMove(nextMove);
          console.log(nextMove);
          let loggedInDetails = allPlayers.filter(
            (player) => player.userId === localStorage.getItem('user')
          );
          console.log("loggedInDetails", loggedInDetails);
          getLoggedInPlayer(loggedInDetails);

          let nextMoveDetails = allPlayers.filter(
            (player) => player.playSequence === nextMove
          );
          console.log("nextMoveDetails", nextMoveDetails);
          getNextMovePlayer(nextMoveDetails);

          setLoading(false);


        }


      })
  }
  
  //hitting play game api
  const getNewBoard = async () => {
    axios(config1).then((response) => {
      if (response.data.status === "Success") {
        console.log(response.data)
        //setLoading(true);
        const display = (response.data.data.transactionMessage)
        const currentloc = (response.data.data.game.players)

        const konkhernar = (response.data.data.game.nextMove)
        const allplayers = (response.data.data.game.players)
        const newLocation = (response.data.data.game.locations)
        console.log(display)
        Display(display)
        setLocations(newLocation)
        setMoveNext(konkhernar)
        setPlayers(allplayers)
        CurrentLOC(currentloc)
        window.confirm(display)
        window.confirm("Next Move of Player:", { konkhernar })
        NextMove(konkhernar)
        //setLoading(false);
      }
      if (response.data.status === "Error") {
        window.confirm(response.data.data.errorMessage)
      }

    })
  }


  console.log(locations);
  if (isLoading) {
    return <div className="App"><img src={LOC} alt="" width="120" height="120" /></div>;
  }
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            {watch}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div className="containergame" id="outer-container">

        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

        <div className="pahiladiv">

          <Locationcard players={players} />
          <CurrentPlayer loggedInPlayer={loggedInPlayer} OwnedAssets={OwnedAssets} />

        </div>

        <div className="dusradiv">
        <div className="watch"> {watch}</div>
          <div className="boarddiv">
            <Board locations={locations} players={players} />
          </div>
        </div>

        <div className="tisradiv">
          <button  className="infobutton" onClick={() => setModalShow(true)}> <img src={ibutton} alt="" width="40" height="40" /> </button>
          <RollDice/>
          

          <div className="buttongroup" >
            <button class="glowing-btn" onClick={getNewBoard}>
              <span class="glowing-txt">
                P<span class="faulty-letter">L</span>AY
              </span>
            </button>
            <button class="glowing-btn" onClick={() => { setModelShow(true); getGameData(); }
            }>
              <span class="glowing-txt">
                P<span class="faulty-letter">UR</span>CHASE
              </span>
            </button>

            <button class="glowing-btn">
              <span class="glowing-txt">
                S<span class="faulty-letter">E</span>LL
              </span>
            </button>
            <button class="glowing-btn">
              <span class="glowing-txt">
                M<span class="faulty-letter">E</span>NU
              </span>
            </button>
            <MyVerticallyCenteredModal
            show={modelShow}
            onHide={() => setModalShow(false)}
          />
          <PurchaseModal show={modalShow} players={players} locations={locations} onHide={() => setModelShow(false)} />
          <br />
          </div>

        </div>
        <div className="Dashboarddiv" id="page-wrap">
          <ToggleVisibility>
            <h4>Dashboard:{localStorage.getItem("user")}</h4>
            <div>GameID:{localStorage.getItem("gameId")}</div>
            <div>CurrentMove:{moveNext}</div>
            <Dashboard players={players} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          </ToggleVisibility>
        </div>



       
      </div>


      <div id="scroll-container">
        <div id="scroll-text">Game ID:{localStorage.getItem("gameId")}  Created By: {createdBy}</div>
      </div>

    </>

  )
}


//Axios is a promise-based library, so the promise must be handled. I am going to use `then` to handle the promise if it is fulfilled, and `catch` if it is rejected (aka, I get an error).
//Then is a callback function that automatically has the response object as an argument. That’s great for us, because the data we’re retrieving will be inside that response object. This is where things will be different based on the data that you’re retrieving. My entire GET request looks like this:


export default GamePage33;