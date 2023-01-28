import React from 'react'

export default function GameDetails(props) {

    const createdBy = props.createdBy
    console.log(props)
    const gameDateTime = props.createdAt
    const assetId = props.gameAssetId
    const winner = props.winner
  return (
    <div className='game-details'>
        <div className='game-details-elements'>
        <ul>
        <li>Game ID: {assetId}</li>
        <li>Created By: {createdBy}</li>
        <li>Winner: {winner}</li>
        <li>{gameDateTime}</li>
        
        </ul>
        </div>
        
    </div>
  )
}
