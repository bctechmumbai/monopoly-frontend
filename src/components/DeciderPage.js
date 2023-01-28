import React from 'react';
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import gamerImage from '../images/house.png'
import Mudra from '../board/images/mudra.png'
import { useNavigate } from "react-router-dom"
import NavbarAft from '../NavbarAft';

import * as FaIcons from 'react-icons/fa';

export const DeciderPage = () => {
    const navigate = useNavigate()

    //const [navigate, setNavigate] = useState(false);
  
    const [name, setName] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('user');

                setName(data.name);
            } catch (e) {
                //setNavigate(true);
            }
        })();
    }, []);

   /* const submit = async e => {
       


        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/newgame" />;
    }
    const submit1 = async e => {
       


        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/gamelist" />;
    }*/

    return (
        <>
        <NavbarAft/>
            <div className="button-decide">

                <div className="Png-image">
                    <img src={gamerImage} alt="" width="190" height="190" /><br />
                </div>


                <button onClick={() => navigate('/gamelist')} className='joingame-button' >
                    <FaIcons.FaDice />
                    Join Game
                </button>

                <button onClick={() => navigate('/newgame')} className='creategame-button'>
                    <FaIcons.FaDice />
                    Create game
                </button>

            </div><div>

            </div></>
    )
}

export default DeciderPage
