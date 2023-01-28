import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Home} from "./components/Home";
import {GamePlay} from "./components/CreateGame";
import {Aboutonly} from "./aboutsettings/aboutonly";
import {Gameinplay} from "./components/WalletCreate";
import {Contact} from "./components/Contact";

import {Confetti} from "./board/Confetti";
import {Flex} from './components/Flex';
import { Wave, Random } from "react-animated-text";
import axios from "axios";
import {Navigate} from "react-router-dom"
import {useEffect, useState} from "react";
import {Controller } from "./components/Carousel";
import MonopolyBoard from './components/MonopolyBoard';
import DeciderPage from './components/DeciderPage';
import * as FaIcons from 'react-icons/fa' ;
import GamePage33 from './board/GamePage';
import Gamelist from "./board/GameList";
import NavbarBef from './NavbarBef';
import NavbarAft from './NavbarAft';
import JoinGameUsingId from './components/JoinGameUsingId';
import Aboutsetting from './aboutsettings/aboutsetting';
import Ledger  from './board/Ledger';


function App() {
    const [navigate, setNavigate] = useState(false);

   

    return <BrowserRouter>
  
 

       

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/whattodo" element={<DeciderPage/>}/>
            <Route path="/gameend" element={<Confetti/>}/>
            <Route path='/gamelist' element={<Gamelist/>}/>
            <Route path="/wallet" element={<Gameinplay/>}/>
            <Route path="/game-board" element={<GamePage33/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/newgame" element={<GamePlay/>}/>
            <Route path="/landing" element={<Flex/>}/>
            <Route path="/tabs" element={<Controller />}/>
            <Route path="/about" element={<Aboutonly/>}/>
           
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/settings" element={<Aboutsetting/>}/>
            <Route path="/JoinGameUsingID" element={<JoinGameUsingId/>}/>
            <Route path="/ledger" element={<Ledger/>}/>
        </Routes>
    </BrowserRouter>;
}

export default App;
