import "./Board.css";
import play from './images/play.png'
import purchase from './images/purchase.png'
import sell from './images/sell.png'
import { Card } from "react-bootstrap";
import axios from "axios";
import { useState ,useEffect} from "react";

export default function Locationcard(props) {
    
    const [lpurchaseName,setPurchase]=useState('')
    const [locationName,setName]=useState('')
    const [costName,setCost]=useState('')
    const [rentName,setRent]=useState('')
    const [ownerName,setOwner]=useState('')

    useEffect(() => {
      getLocationsData();
  
    }
    );


    const players = props.players;
    const locationlive=players.filter((game1) => game1.userId===localStorage.getItem('user'))
  
        const purchaseid= locationlive[0].currentPlace 
        console.log(purchaseid)
        localStorage.setItem('carditem', purchaseid)
       // setPurchase(purchaseid)
    

        const data = ({
          "assetId": localStorage.getItem("carditem"),
        });
        const config = {
          method: 'post',
          url: '/api/vyapar/getasset/',
          headers: {
            'x-access-token': localStorage.getItem('x-access-token')
          },
          data: data
        };

        const getLocationsData = async () => {
          axios(config)
      .then((response) => {
       const name=response.data.data.assetData.placeName
       const cost=response.data.data.assetData.placeCost
       const rent=response.data.data.assetData.placeRent
       const image=response.data.data.assetData.placeImage
     
      setOwner(image)
       setCost(cost)
       setRent(rent)
       setName(name)
        console.log(response.data)
        

      })

        }
        const imageSource="data:image/jpeg;base64,"+ ownerName
        //console.log(imageSource)
      
     

    if (players.length > 0) {
        return (
          
          <div className="positioncard">
            <div>
              <div>
              <h6 className="colorset" >{locationName}</h6>
                <Card.Img
                  variant="top"
                  src={imageSource}
                  height="40px" />
                  
                <div className="List">Cost: {costName}</div>
                <div className="List">Rent: {rentName}</div>
                
  <h6 className="colorset">Current Position</h6>
              </div>
</div>
</div>

)}  

}