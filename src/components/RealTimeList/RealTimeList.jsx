import React, { useEffect } from "react";
import { Container, Row , Col, Card, Table, Tab, Tabs,ListGroup, Badge, OverlayTrigger} from "react-bootstrap";
import { compose } from "redux";
import { connect } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const RealTimeList = (props)=>
{
    if(!props.isLoaded) return null;

    /*let data =[];
    props.coinsShortData.map(coin=>{
        let tmpData=[];
        coin.data.map(v=>{
            tmpData.push({name: v, da});
        })
    })*/

    debugger;
    return <span>
        <Row>
            <Col>
                <h3 class="display-3">Сoins for view Real-time data</h3>
            </Col>
        </Row>

        <Row>
            {props.coinsShortData[0].data.map((c,i)=>
            <Col>
            <Card style={{ width: '18.2rem' }} bg={'light'}>
                <Card.Body>
                    <Card.Title>{c.name}</Card.Title>
                    <b>{i}</b>
                </Card.Body>
            </Card>
            </Col>)}
        </Row>

    </span>
}


let mapStateToProps = (state) => ({
    coinsShortData: state.shortData.coinsShortData,
    isLoaded:  state.shortData.isLoaded
})

export default compose(connect(mapStateToProps,{}))(RealTimeList);