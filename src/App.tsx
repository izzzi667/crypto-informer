import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinsContainer from './components/Coins/CoinsContainer';



export const App = () => {
  return (<BrowserRouter>
      <Route path ='/coins' render = {()=> <CoinsContainer />} />
    </BrowserRouter>
  );
};


export default App;