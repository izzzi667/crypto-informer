import React, { useEffect } from "react";
import { Col, Row, ListGroup} from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { getGlobalData } from "../../redux/cryptoReducer";
import Loading from "../Loading/Loading";



const Global = (props) =>
{
    useEffect(() => {
        props.getGlobalData();        
    }, []);

    if(props.isLoading){
        return <Loading />
    }
    debugger;

    return <span>
            <Row>
                <Col><h3 class="display-3">Cryptocurrency global data</h3></Col>
            </Row>
            <Row>
                <Col></Col>
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
});

export default compose(connect(mapStateToProps,{getGlobalData}))(Global);