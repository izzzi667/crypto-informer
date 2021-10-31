import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinContainer from './components/Coins/Coin/CoinContainer';
import Header from './components/Header/Header';
import CoinHistroyContainer from './components/Coins/Coin/CoinHistroyContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import CoinsDetailedList from './components/Coins/CoinsDetailedList';
import News from './components/News/News';
import Global from './components/Global/Golbal';
import Exchanges from './components/Exchanges/Exchanges';
import SingleExchange from './components/Exchanges/SingleExchange/SingleExchange';
import RealTimeGraph from './components/RealTimeGraph/RealTimeGraph';
import RealTimeList from './components/RealTimeList/RealTimeList';



export const App = () => {
  return (<BrowserRouter>
      <Header />      
      <Container>  
        <Route exact path = '/' render ={()=><Global />} />
        <Route exact path ='/coinsDetail' render = {()=> <CoinsDetailedList />} />
        <Route path ='/News' render = {()=> <News />} />
        <Route exact path ='/Exchanges' render = {()=> <Exchanges />} />
        <Route exact path ='/Exchanges/:exchangeId' render = {()=> <SingleExchange />} />
        <Route exact path ='/coins/:coinId/history' render = {()=> <CoinHistroyContainer />} />
        <Route exact path ='/coins/:coinId' render = {()=> <CoinContainer />} />
        <Route exact path ='/Realtime/:coinId' render = {()=> <RealTimeGraph />} />
        <Route exact path ='/Realtime' render = {()=> <RealTimeList />} />
      </Container>      
    </BrowserRouter>
  );
};


export default App;

