import axios from "axios";
import React, { useEffect, useState } from "react";
import Childledger from "./Childledger";

function Ledger() {
  const [allTransactions, getAllTransactions]=useState([]);
  const token = localStorage.getItem("x-access-token");
  const username = localStorage.getItem("user");
  const [condition, setCondition]=useState(false);

  const data = {
    assetId: localStorage.getItem("gameId"),
    assetType: "Game",
  };

  const config = {
    method: "post",
    url: "/api/vyapar/getassethistory/",
    headers: {
      "x-access-token": token,
    },
    data: data,
  };

  const fetchData = async () => {
    let res = await axios(config);
    let  data  = res.data.data
    console.log(data);
    getAllTransactions(data);
    setCondition(true)

  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
      <div>
      {condition && <Childledger allTransactions={allTransactions}/>}

      </div>
    </>
  );
}

export default Ledger;

