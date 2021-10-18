import React, { useEffect } from "react";
import { Col, Row, ListGroup, Image} from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { getGlobalData, getTrendingData } from "../../redux/cryptoReducer";
import Loading from "../Loading/Loading";
import { NavLink } from "react-router-dom";



const Global = (props) =>
{
    useEffect(() => {
        props.getGlobalData();        
        props.getTrendingData();
    }, []);

    if(props.isLoading || props.isLoadingTrending ){
        return <Loading />
    }
    debugger;

    return <span>
            <Row>
                <Col><h3 class="display-3">CRIN - Cryptocurrency informer</h3></Col>
            </Row>            
            <Row>                
                <Col>
                <Row><Col><br /><h5 class="display-5">TOP7 Trending Coins:</h5></Col></Row>
                    {props.trending.coins.map(t=>
                    <Row className='shadow-sm bg-light m-1'>
                        <Col className="col-1 m-1">
                            <NavLink to={'/coin/'+t.item.id}><Image src={t.item.small} /></NavLink>
                        </Col>
                        <Col >
                            <NavLink to={'/coin/'+t.item.id}>{t.item.name} ({t.item.symbol})</NavLink>
                        </Col>
                        <Col >Rank: {t.item.market_cap_rank}</Col>
                        <Col >Price: {t.item.price_btc} BTC</Col>

                    </Row>
                    )}
                </Col>
                <Col xs lg="3">
                <br />                
                    <ListGroup>
                        <ListGroup.Item variant="warning">Current status</ListGroup.Item>
                        <ListGroup.Item>Markets: {props.global.data.markets}</ListGroup.Item>
                        <ListGroup.Item>Coins: {props.global.data.active_cryptocurrencies}</ListGroup.Item>
                        <ListGroup.Item>Upcoming icos: {props.global.data.upcoming_icos}</ListGroup.Item>
                        <ListGroup.Item>Ongoing icos: {props.global.data.ongoing_icos}</ListGroup.Item>
                        <ListGroup.Item>Ended icos: {props.global.data.ended_icos}</ListGroup.Item>
                    </ListGroup>
                    <br />
                    <ListGroup>
                        <ListGroup.Item variant="warning">Global value</ListGroup.Item>
                        <ListGroup.Item>Market cap (btc): {props.global.data.total_market_cap.btc.toFixed(0)}</ListGroup.Item>
                        <ListGroup.Item>Market cap (usd): {props.global.data.total_market_cap.usd.toFixed(0)}</ListGroup.Item>
                        <ListGroup.Item>Total volume (btc): {props.global.data.total_volume.btc.toFixed(0)}</ListGroup.Item>
                        <ListGroup.Item>Total volume (usd): {props.global.data.total_volume.usd.toFixed(0)}</ListGroup.Item>
                        <ListGroup.Item variant={props.global.data.market_cap_change_percentage_24h_usd>0?'success':'danger'}>
                            Market cap change 24h:{' '} 
                            {props.global.data.market_cap_change_percentage_24h_usd.toFixed(3)}% 
                            {props.global.data.market_cap_change_percentage_24h_usd>0?'▲':'▼'}                    
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                
            </Row>
    </span>
}

let mapStateToProps = (state) => ({
    global: state.crypto.global,
    isLoading: state.crypto.isLoading,
    trending: state.crypto.trending,
    isLoadingTrending: state.crypto.isLoadingTrending

});

export default compose(connect(mapStateToProps,{getGlobalData, getTrendingData}))(Global);