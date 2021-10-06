import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinsContainer from './components/Coins/CoinsContainer';
import CoinContainer from './components/Coins/Coin/CoinContainer';



export const App = () => {
  return (<BrowserRouter>
      <Route path ='/coins' render = {()=> <CoinsContainer />} />
      <Route path ='/coin/:coinId' render = {()=> <CoinContainer />} />
    </BrowserRouter>
  );
};


export default App;

