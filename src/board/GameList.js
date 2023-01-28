import axios from "axios";
import React from "react";
import "./GameList.css";
import NavbarAft from "../NavbarAft";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function  Gamelist() {
  const [ isLoading,setLoading] = useState(true);
  const navigate = useNavigate();
  const [gameIdClicked, getGameIdClicked] = useState();
  const [gameslist, setGameslist] = useState([]);
  const [onGoingGamesState, getOnGoingGames] = useState([]);
  const [ongoingGamesWhereUserIsThereState, getOngoingGamesWhereUserIsThere] =
    useState([]);
  const [endedGamesWhereUserWasThereState, getEndedGamesWhereUserWasThere] =
    useState([]);
    const [responseGot,getResponseGot]=useState()
      const [responseToGamePageState, getResponseToGamePageState]=useState([]);

  useEffect(() => {
    
    callGetAllGamesApi();
    
  },[]);
  const token = localStorage.getItem("x-access-token");
 // const username = localStorage.getItem("user");
  const data = JSON.stringify({
    message: "Get details of all games",
  });

  const config = {
    method: "post",
    url: "/api/vyapar/getgames/",
    headers: {
      "x-access-token": token,
    },
    data: data,
  };

  const dataForJoinGame = JSON.stringify({
    gameId: "136202212448",
    User: "lahu@nic.in",
  });

  const configForJoinGame = {
    method: "post",
    url: "/api/vyapar/joingame/",
    headers: {
      "x-access-token": token,
    },
    data: dataForJoinGame,
  };

  const dataForPlayGame = JSON.stringify({
    gameId: "136202212448",
    User: "Amod@nic.in Added Just for session Identity",
  });

  const configForPlayGame = {
    method: "post",
    url: "/api/vyapar/playgame/",
    headers: {
      "x-access-token": token,
    },
    data: dataForPlayGame,
  };

  const passingPropToGamePage =(getGameId)=>{

    const initialRespone = gameslist.filter((game)=>game.assetData.assetId === getGameId)
    console.log(initialRespone);
    getResponseToGamePageState(initialRespone);
    console.log(responseToGamePageState);
  }

  const loggedInUsername = localStorage.getItem("user");
  console.log(loggedInUsername);

  
  //function
  const gettingOnGoingGames = () => {
    
    let onGoingGames = gameslist.filter(
      (game) => game.assetData.closed === false
    );
    let whereUserIsNotThere = onGoingGames.filter((game) =>
      game.assetData.players.every(
        (player) => player.userId !== loggedInUsername
      )
    );
    console.log("where user is not there: ", whereUserIsNotThere);
    getOnGoingGames(whereUserIsNotThere);
    console.log("All On Going Games: ", onGoingGamesState);
    
    let ongoingGamesWhereUserIsThere = onGoingGames.filter((game) =>
      game.assetData.players.some(
        (player) => player.userId === loggedInUsername
      )
    );
    getOngoingGamesWhereUserIsThere(ongoingGamesWhereUserIsThere);
    console.log(
      "On Going Games Where User Is There",
      ongoingGamesWhereUserIsThere
    );

    let ClosedGameList = gameslist.filter(
      (game) => game.assetData.closed === true
    );
    console.log("all closed games list", ClosedGameList);
    let endedGamesWhereUserWasThere = ClosedGameList.filter((game) =>
      game.assetData.players.some(
        (player) => player.userId === loggedInUsername
      )
    );
    getEndedGamesWhereUserWasThere(endedGamesWhereUserWasThere);
    console.log(
      "Ended Games Where User Was There",
      endedGamesWhereUserWasThere
    );
  };
/*
  //function
  const gettingOnGoingGamesWhereUserIsThere = () => {
    let onGoingGames = gameslist.filter(
      (game) => game.assetData.closed === false
    );
    console.log("all on going games: ", onGoingGames);

    let ongoingGamesWhereUserIsThere = onGoingGames.filter((game) =>
      game.assetData.players.some(
        (player) => player.userId === loggedInUsername
      )
    );
    getOngoingGamesWhereUserIsThere(ongoingGamesWhereUserIsThere);
    console.log(
      "On Going Games Where User Is There",
      ongoingGamesWhereUserIsThere
    );
  };
*
  const gettingEndedGamesWhereUserIsThere = () => {
    let ClosedGameList = gameslist.filter(
      (game) => game.assetData.closed === true
    );
    console.log("all closed games list", ClosedGameList);
    let endedGamesWhereUserWasThere = ClosedGameList.filter((game) =>
      game.assetData.players.some(
        (player) => player.userId === loggedInUsername
      )
    );
    getEndedGamesWhereUserWasThere(endedGamesWhereUserWasThere);
    console.log(
      "Ended Games Where User Was There",
      endedGamesWhereUserWasThere
    );
  };
*/
  //on going games button click
  const aogGameClick = async (gameId) => {
    localStorage.setItem("gameId", (gameId));
    console.log(gameId);
    passingPropToGamePage(gameId);
    navigate("/JoinGameUsingID"
   // ,{
    //  state:{gameResponse:initialRespone}
   // }
    );
   

    /*
    axios(configForJoinGame).then((response) => {
      console.log(JSON.stringify(response.data.data));
    });
*/
  };

  //already joined games button click
  const ajgGameClick = async (gameId) => {
    console.log(gameId);
    localStorage.setItem("gameId",(gameId));
    let specificResponse = gameslist.filter(
      (game) => game.assetData.assetId === gameId
    );
    console.log("all on going games: ", specificResponse);
    navigate("/game-board"
   // ,{
    //  state:{gameResponse:initialRespone}
   // }
    );
    /*
    axios(configForPlayGame).then((response) => {
      console.log(JSON.stringify(response.data.data));
    });
    */
  };

  //end games button click
  const egGameClick = async (gameId) => {
    console.log(gameId);
    localStorage.setItem("gameId", gameId);
    navigate("/ledger")
  };
  const callGetAllGamesApi = async (e) => {
    axios(config).then((response) => {
      console.log(JSON.stringify(response.data.data));
      
      const allGames = response.data.data;
      setGameslist(allGames);
      console.log(allGames);
      
      setLoading(false);
    
   
    let onGoingGames = allGames.filter(
      (game) => game.assetData.closed === false
    );
    let whereUserIsNotThere = onGoingGames.filter((game) =>
      game.assetData.players.every(
        (player) => player.userId !== loggedInUsername
      )
    );
    console.log("where user is not there: ", whereUserIsNotThere);
    getOnGoingGames(whereUserIsNotThere);
    console.log("All On Going Games: ", whereUserIsNotThere);
    
    let ongoingGamesWhereUserIsThere = onGoingGames.filter((game) =>
      game.assetData.players.some(
        (player) => player.userId === loggedInUsername
      )
    );
    getOngoingGamesWhereUserIsThere(ongoingGamesWhereUserIsThere);
    console.log(
      "On Going Games Where User Is There",
      ongoingGamesWhereUserIsThere
    );

    let ClosedGameList = allGames.filter(
      (game) => game.assetData.closed === true
    );
    console.log("all closed games list", ClosedGameList);
    let endedGamesWhereUserWasThere = ClosedGameList.filter((game) =>
      game.assetData.players.some(
        (player) => player.userId === loggedInUsername
      )
    );
    getEndedGamesWhereUserWasThere(endedGamesWhereUserWasThere);
    console.log(
      "Ended Games Where User Was There",
      endedGamesWhereUserWasThere
    );
  });
  };

  if (isLoading) {

    return <div className="App">Loading...</div>;
  }

  return (
    <><NavbarAft /><div className="backgroundlinear">

      <div className="note">
        <h6>
          Note:Click on Create
          Game to create new game
        </h6>
      </div>
      <div className="action-button">

        <button className="creategame-button" onClick={() => navigate('/newgame')}>
          Create Game
        </button>
      </div>

      <div className="gamelist">
        <div className="child All-ongoing-games">
          <table>
            <thead>
              <tr>
                <th>All Ongoing Games</th>
              </tr>
            </thead>
            <tbody>
              {onGoingGamesState.map((game, index) => (
                <tr key={game.assetData.assetId}>
                  <td>
                    <button
                      onClick={() => {
                        aogGameClick(game.assetData.assetId);
                        //props.loadGamePage();
                      } }
                    >
                      {game.assetData.assetId}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="child Already-joined-games">
          <table>
            <thead>
              <tr>
                <th>Already Joined Games</th>
              </tr>
            </thead>
            <tbody>
              {ongoingGamesWhereUserIsThereState.map((game, index) => (
                <tr key={game.assetData.assetId}>
                  <td>
                    <button
                      onClick={() => {
                        ajgGameClick(game.assetData.assetId);
                        // props.loadGamePage();
                      } }
                    >
                      {game.assetData.assetId}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="child Ended-games">
          <table>
            <thead>
              <tr>
                <th>Ended Games</th>
              </tr>
            </thead>
            <tbody>
              {endedGamesWhereUserWasThereState.map((game, index) => (
                <tr key={game.assetData.assetId}>
                  <td>
                    <button
                      onClick={() => {
                        egGameClick(game.assetData.assetId);
                        // props.loadGamePage();
                      } }
                    >
                      {game.assetData.assetId}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div></>
  );
}

export default Gamelist;