import { all } from "axios";
import React from "react";
import Board from "./Board";

export default function Childledger(props) {
  const allTransactions = props.allTransactions;
  const lenght=props.allTransactions.length;
  console.log(lenght);

  const [mediaItem, setMediaItem] = React.useState(allTransactions[lenght-1]);
  const [index, setIndex] = React.useState(lenght-1);
 const [locations,getLocations]=React.useState([]);
 const [players,getPlayers]=React.useState([]);

  React.useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i - 1) % allTransactions.length),
      2000
    );
    return () => clearInterval(timerId);
  }, []);

  React.useEffect(() => {
    setMediaItem(allTransactions[index]);
    getLocations(allTransactions[index].assetData.locations)
    getPlayers(allTransactions[index].assetData.players)

  }, [index]);

  return <><div>Childledger </div>
  <div>Iterating through array in the interval of 2 secs:{index}</div>
  <Board locations={locations} players={players}/>
  </>;

}

