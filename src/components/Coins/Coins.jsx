import { getTheme, DefaultPalette,  Stack, FontSizes, FontWeights  } from "@fluentui/react";
import * as React from "react";
import { Card, CardGroup, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Coins = (props) =>{
    return(
        <Row xs={1} md={2} className="g-4">
          <h2>List of coins (total: {props.coins.length})</h2>
            {props.coins.map(c =><Card >
            <Card.Header>{c.symbol}</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                {c.name}<br />
                <NavLink to={'/coin/'+c.id}>Open </NavLink>
              </Card.Text>
            </Card.Body>
            </Card>
            )}            
        </Row>   
    )
}


export default Coins;

