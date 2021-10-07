import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinsContainer from './components/Coins/CoinsContainer';
import CoinContainer from './components/Coins/Coin/CoinContainer';
import Header from './components/Header/Header';



export const App = () => {
  return (<BrowserRouter>
      <Header />
      <Route path ='/coins' render = {()=> <CoinsContainer />} />
      <Route path ='/coin/:coinId' render = {()=> <CoinContainer />} />
    </BrowserRouter>
  );
};


export default App;

