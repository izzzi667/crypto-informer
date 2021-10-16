import React, { useEffect } from "react";
import { getCoinsDetail } from "../../../redux/cryptoReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Loading from "../../Loading/Loading";
import { Card, Col, Row, ListGroup, Pagination,DropdownButton, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Icon } from "@fluentui/react";
import DateDiff from "../../Common/DateDIff";




const CoinstDetail = (props) =>
{
    useEffect(() => {
        props.getCoinsDetail();        
    }, [])
    if(props.isLoading){
        return <Loading />
    }
    return <div>
    <Row><Col><h1>Coins by market cap</h1></Col>

    </Row>

    <Row className="g-4">    
      {props.coins.map(c =>
        
        <Col>
      <Card style={{ width: '13.2rem' }} bg={'light'}>
      <Card.Img variant="top" src={c.image} style={{ height: '10rem', width: '10rem', margin: '1.6rem' }}/>
      <Card.Body>
        <Card.Title>{c.name}</Card.Title>
        <Card.Text><small>Market cap rank: {c.market_cap_rank}</small></Card.Text>
        <Card.Link href={'/coin/'+c.id}>Open {c.symbol.toUpperCase()} page</Card.Link>
      </Card.Body>
      <ListGroup variant="flush">
            <ListGroup.Item variant={c.price_change_24h>0?'success':'danger'}>Price: {c.current_price}$ {c.price_change_24h>0?<Icon iconName="TriangleSolidUp12" />:<Icon iconName="TriangleSolidDown12" />}</ListGroup.Item>
            <ListGroup.Item variant={c.price_change_24h>0?'success':'danger'}>Price change 24h:<br /> {c.price_change_24h} </ListGroup.Item>
            <ListGroup.Item variant={c.price_change_24h>0?'success':'danger'}>High/low 24h: <br />{c.high_24h}$/{c.low_24h}$</ListGroup.Item>
        </ListGroup>
      <Card.Footer>
      <small className="text-muted"><DateDiff date={c.last_updated} /> ago</small>
        </Card.Footer>
      </Card>
      </Col>
      )}            
  </Row>
  </div>
}



let mapStateToProps = (state) => ({
    coins: state.crypto.coinsDetail,
    isLoading: state.crypto.isLoading,
});

export default compose(connect(mapStateToProps,{getCoinsDetail}))(CoinstDetail);