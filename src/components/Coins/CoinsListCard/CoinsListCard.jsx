import React from "react";
import { Card, ListGroup, Col } from "react-bootstrap";
import DateDiff from "../../Common/DateDIff";
import { Icon } from "@fluentui/react";


const CoinsListCard = (props) =>
{
    const varianValue = props.coinInfo.price_change_24h>0?'success':'danger';
    return <Col>
            <Card style={{ width: '13.2rem' }} bg={'light'}>
                <Card.Img variant="top" src={props.coinInfo.image} style={{ height: '10rem', width: '10rem', margin: '1.6rem' }}/>
                <Card.Body>
                    <Card.Title>{props.coinInfo.name}</Card.Title>
                    <Card.Text><small>Market cap rank: {props.coinInfo.market_cap_rank}</small></Card.Text>
                    <Card.Link href={'/coin/'+props.coinInfo.id}>Open {props.coinInfo.symbol.toUpperCase()} page</Card.Link>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item variant={varianValue}>Price: {props.coinInfo.current_price}$ {props.coinInfo.price_change_24h>0?<Icon iconName="TriangleSolidUp12" />:<Icon iconName="TriangleSolidDown12" />}</ListGroup.Item>
                    <ListGroup.Item variant={varianValue}>Price change 24h:<br /> {props.coinInfo.price_change_24h} </ListGroup.Item>
                    <ListGroup.Item variant={varianValue}>Low/High 24h: <br />{props.coinInfo.low_24h}$/{props.coinInfo.high_24h}$</ListGroup.Item>
                </ListGroup>
                <Card.Footer>
                    <small className="text-muted"><DateDiff date={props.coinInfo.last_updated} /> ago</small>
                </Card.Footer>
            </Card>
        </Col>
}

export default CoinsListCard;

