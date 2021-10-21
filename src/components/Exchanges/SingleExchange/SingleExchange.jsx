import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getExchangeData } from "../../../redux/exchangeReducer";
import { withRouter } from "react-router";
import Loading from "../../Loading/Loading";
import { Container, Row , Col, Card, Nav, Tab, Tabs,ListGroup} from "react-bootstrap";


const SingleExchange = (props) =>
{
    useEffect(()=>{
        props.getExchangeData(props.match.params.exchangeId);
    },[]);

    if(props.isLoading){
        return <Loading />
    }
    debugger;

    return <span>
        <Row>
            <Col>
                <h3 class="display-3"><img src={props.exchange.image} />{props.exchange.name}</h3>
            </Col>
        </Row>
         <Container>
      <div class="row">
        <div class="col-md-3">
            <ListGroup>
                <ListGroup.Item variant="warning"><b>Information</b></ListGroup.Item>
                <ListGroup.Item>Est: {props.exchange.year_established}, {props.exchange.country} </ListGroup.Item>
                <ListGroup.Item>Country: {props.exchange.country} </ListGroup.Item>
                <ListGroup.Item>Total Rank: {props.exchange.trust_score_rank} </ListGroup.Item>
                <ListGroup.Item>Trust Score: {props.exchange.trust_score} </ListGroup.Item>
                <ListGroup.Item>Trade volume 24h (btc): {props.exchange.trade_volume_24h_btc} </ListGroup.Item>
                
                
            </ListGroup>
            <br />
            <ListGroup>
                <ListGroup.Item variant="warning"><b>Links</b></ListGroup.Item>
                <ListGroup.Item>Website: <a href ={props.exchange.url}>{props.exchange.name}</a></ListGroup.Item>
                <ListGroup.Item><a href={props.exchange.reddit_url}>Reddit</a></ListGroup.Item>
                <ListGroup.Item><a href={props.exchange.slack_url}>Slack</a></ListGroup.Item>
                <ListGroup.Item><a href={props.exchange.telegram_url}>Telegram</a></ListGroup.Item>
                <ListGroup.Item><a href={props.exchange.facebook_url}>Facebook</a></ListGroup.Item>
                
            </ListGroup>
        </div>
        <div class="col-md-9">
            <Card><Card.Body>
            <Tabs defaultActiveKey="tickers">
            <Tab eventKey="tickers" title="Tickers">
                {props.exchange.tickers.map(t=>
                    <span>{t.base}<br /></span>
                    )}
            </Tab>
            <Tab eventKey="news" title="News">
                {props.exchange.status_updates.map(s=>
                    <span>{s.description}<br /></span>
                    )}            </Tab>
            </Tabs>      
            </Card.Body></Card>
        </div>
      </div>
    </Container>
    </span>
}

let mapStateToProps = (state) => ({
    exchange: state.exchange.singleExchgnage,
    isLoading: state.exchange.isLoading
});

export default  compose(withRouter,connect(mapStateToProps, {getExchangeData}))(SingleExchange);