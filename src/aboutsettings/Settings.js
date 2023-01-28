import styled from "styled-components";
import React, { useState } from 'react';
import { SliderComponent } from "./index";
import Rate from "./Rating"

import Sound from './Sound';

function Settings() {
  
    const [value, setValue] = useState(50);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
   
    
    return (
      <div>
        <div className="set">
          <div className="container my-5">
            <h1>
              <span>
                <button className='btn btn-secondary'>
                  <span>&lt;</span> Back
                </button>
                <span></span>
                <h3>Settings</h3>
              </span>
            </h1>
            <br></br>
            <div className='volume'>
              <h4>Volume</h4>
                <AppContainer>
                  <h2>{value}</h2>
                  <SliderComponent
                    value={value}
                    handleChange={handleChange}
                    min={0}
                    max={100}
                    step={0.001}
                  />
                </AppContainer>
            </div>
            <br></br>
            <Sound/>
            <br></br>
            <div className="rate">
                <h4>Rate us</h4>
                <Rate/>
            </div>
            
          
            
          </div>
        </div>
      </div>
    )
}
  
export default Settings
  
const AppContainer = styled.div`
    width: 800px;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: lightgreen;
    color: #ffffff;
`;