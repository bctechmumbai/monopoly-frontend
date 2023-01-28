import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import boardImage from "./cardimages/board-game.png";
import LOC from "./cardimages/chennai.png";
import axios from "axios";




import Container from "react-bootstrap/Container";

import { useEffect, useState } from "react";


function PurchaseModal(props) {
  const {locations}=props;
  const {players}=props;
  const[curr,setCurr]=useState("");
  const[purchaseconf,setPurchase]=useState();
  console.log(props.players)
  console.log(locations)
  const locationlive=players.filter((game) => game.userId===localStorage.getItem('user'))
  console.log(locationlive)
  const purchaseid= locationlive[0].currentPlace
  
  console.log(purchaseid)
  const walletbal=locationlive[0].walletBalance

 
  
 
  const data = ({
   
    "gameId":localStorage.getItem("gameId"),
    "locationAssetId": locationlive[0].currentPlace,
    "User ":localStorage.getItem("user")
  });
  const config = {
    method: 'post',
    url: '/api/vyapar/purchaselocation/',
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    },
    data: data
  };
 
  
  const submit = async e => {
    
  axios(config)
  .then((response)=>{
    if(response.data.status === "Success"){
      console.log((response.data));
  const Purchase=(response.data.data.transactionMessage)
  setPurchase(Purchase)
  window.confirm(Purchase)
    }
    if(response.data.status === "Error"){
      window.confirm(response.data.data.errorMessage)
    }
  
  
})

}

  
  return (
    <Modal
      {...props}
      dialogClassName="modal-100w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm your location purchase:{purchaseid}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} md={6}>
              Player : {localStorage.getItem("user")}
              <br />
              Wallet Balance:{walletbal}<br />
              
              Place for Purchase:{purchaseid}
            </Col>
            
               <Col xs={2} md={3}>
               <img src={boardImage} alt="" width="120" height="120" />
           </Col>
               
           
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ submit  }>Purchase</Button>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default PurchaseModal;
