import React from 'react';
//react libraries
import {useState, useEffect} from 'react';
//props
//import PropTypes from 'prop-types';
//services
//import callToApi from '../services/api';
//import ls from '../services/localStorage';
//components
import data from '../data/characters.json'
import Header from './Header';
import Landing from './Landing';
import Characters from './Characters';
import CharacterDetail from './CharacterDetail';
import Games from './Games';
import MemoryGame from './MemoryGame';
import WhackASheep from './WhackASheep';
import ConnectFour from './ConnectFour';
//routes
import {Routes, Route} from 'react-router-dom';
//styles
import '../styles/App.scss';


function App() {
  //STATE VARIABLES
  const [characterData, setCharacterData] = useState(data);
  //USE EFFECT
  /*useEffect (()=> {
    callToApi().then ((data) => {
      console.log(data);
    });
  }, []);*/
  //EVENT FUNCTIONS
  //RENDER FUNCTIONS
  //RETURN
  return (
    <>
      <Routes>
        <Route path='/' element={<><Header/><Landing/></>}></Route>
        <Route path='/characters' element={<Characters characterData={characterData}/>}></Route>
        <Route path='/character/:id' element={<CharacterDetail/>}></Route>
        <Route path='/games' element={<><Header/><Games/></>}></Route>
        <Route path='/games/memory-game' element={<MemoryGame/>}></Route>
        <Route path='/games/whack-a-sheep' element={<WhackASheep/>}></Route>
        <Route path='/games/connect-four' element={<ConnectFour/>}></Route>
      </Routes>
    </>
  );
}

export default App;
