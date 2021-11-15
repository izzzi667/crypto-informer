import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Footer =() =>{
    return(
        <span><br /><br /><br /><br /><br /><br />
        <Container fluid className="py-3 border-warning bg-warning mt-5"> 
         <Container>
          <Row>
            <Col p={3} lg={3}>
              <h5> <b>Main</b> </h5>
              <ul className="list-unstyled">
                <li><NavLink to='/coinsDetail'>Coins</NavLink> </li>
                <li><NavLink to='/news'>News</NavLink> </li>
                <li><NavLink to='/Exchanges'>Exchanges</NavLink> </li>
              </ul>
            </Col>
            <Col p={3} lg={3}>
              <h5> <b>Sources</b> </h5>
              <ul className="list-unstyled">                
                <li> <a href="https://github.com/izzzi667/crypto-informer">Github</a> </li>
              </ul>
            </Col>
            <Col p={3} lg={3}>
              <h5> <b>About</b> </h5>
              <p className="mb-0">This is a pet-project for study React and Redux. Data provided by <a href='https://www.coingecko.com/'>CoinGecko</a> </p>
            </Col>
           
          </Row>          
          </Container>
        </Container>
        </span>
    


    );    
}

export default Footer;