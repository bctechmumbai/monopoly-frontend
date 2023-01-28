import React from 'react'

export default function Card() {
  return (
    
    <div className="card-group">

        <div className="card" style={{width: "10rem", height: "20rem",fontSize:"12px"}}>
        <div class="card-header">Start</div>
            <div className="card-body">
            <img src="..." className="card-img-top" alt="..."/>
                <li className="list-group-item">amod@nic.in</li>
                <li className="list-group-item">sakshi@nic.in</li>
                <li className="list-group-item">sakshi@nic.in</li>
            </div>
            <ul class="list-group list-group-flush">
                <li className="list-group-item">Cost:5000</li>
                <li className="list-group-item">Rent:200</li>
            </ul>
        <div class="card-footer">Owner:</div>
        </div>
        </div>
       

   

  )
}
