import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinsContainer from './components/Coins/CoinsContainer';
import CoinContainer from './components/Coins/Coin/CoinContainer';
import Header from './components/Header/Header';
import CoinHistroyContainer from './components/Coins/Coin/CoinHistroyContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import CoinsDetailedList from './components/Coins/CoinsDetailedList';
import News from './components/News/News';


export const App = () => {
  return (<BrowserRouter>
      <Header />
      <Container fluid>
        <Row>
       
        </Row>
      </Container>
      <Container>  
        <Route path ='/coins' render = {()=> <CoinsContainer />} />
        <Route path ='/coinsDetail' render = {()=> <CoinsDetailedList />} />
        <Route path ='/News' render = {()=> <News />} />
        <Route path ='/history/:coinId' render = {()=> <CoinHistroyContainer />} />
        <Route path ='/coin/:coinId' render = {()=> <CoinContainer />} />
      </Container>
      
    </BrowserRouter>
  );
};


export default App;

