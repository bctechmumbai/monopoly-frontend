import "./Dashboard.css";
import ListGroup from "react-bootstrap/ListGroup";
import { Card } from "react-bootstrap";
import gamerImage from "./images/gamer.png";
import CardGroup from "react-bootstrap/CardGroup";
import Col from 'react-bootstrap/Col';
import CardLoad from "./Card"
import Row from "react-bootstrap/esm/Row";
import Mudra from "./images/mudra.png"


export default function Dashboard(props) {

  console.log(props.players);
  const { players } = props;
  



  const nextMovePlayerDetails = players.filter(player=>player)
    const renderPlayerCrad = (player,index)=>{
      localStorage.setItem(player.userId,  player.currentPlace)
      return(
        <Card
        className="text-bg-info text-center"
        style={{ width: "120px", height: "120px" }}
      >
        <Card.Img variant="top" src={gamerImage} height="100px" width="140px" />
        <p>
          Player {player.playSequence}: {player.userId}
          <br />
          
          Wallet Balance: {player.walletBalance}<img src={Mudra} alt="" width="5" height="5" />
          <br />
          Current Place: {player.currentPlace}
        </p>
      </Card>
      
    
      )
    }

    
  return (
    <>
    <div>
   
    </div>
  <div className="dashboardgrid">
   
  {players.map(renderPlayerCrad)}
 </div>
 </>
  )
};