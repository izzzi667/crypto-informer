import React, { useEffect } from "react";
import { Row , Col, Card} from "react-bootstrap";
import { compose } from "redux";
import { connect } from "react-redux";
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import { NavLink } from "react-router-dom";
import ThrendingIcon from "../Common/ThrendingIcon";


const RealTimeList = (props)=>
{
    if(!props.isLoaded) return null;

    let data =[];
    for(let i=0; i<=100; i++) {data.push([]);}

    props.coinsShortData.map(record=>{
        let time = record.time;        
        record.data.map((v,index)=>{
            data[index].push({x: time, y: v.current_price});
        })
    })


    return <span>
        <Row>
            <Col>
                <h3 class="display-3">Real-time Price</h3>
            </Col>
        </Row>

        <Row>
            {props.coinsShortData[props.coinsShortData.length-1].data.map((c,i)=>            
            <Col>
            <br />
            <Card style={{ width: '18.2rem' }} bg={'light'}>
                <Card.Body>                    
                    <Card.Title>{c.name} ({c.current_price} $)<ThrendingIcon value ={c.price_change_percentage_1h_in_currency}/></Card.Title>


                    <XYPlot height={250} width={200} margin={{bottom: 10, left: 10}}>
    
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis
                        attr="x"
                        attrAxis="y"
                        orientation="bottom"
                        tickFormat={function tickFormat(d){return new Date(d).toLocaleTimeString()}}
                        tickLabelAngle={-90}
                    />
                    <YAxis 
                        attr="y"
                        attrAxis="x"
                        orientation="left"
                    />
                    <LineSeries data={data[i]} color = {c.price_change_percentage_1h_in_currency<0?'red':'green'}
/>
                </XYPlot>
                <NavLink to={'/Realtime/'+i}>More</NavLink>
                </Card.Body>
            </Card>
            </Col>)}
        </Row>

    </span>
}


let mapStateToProps = (state) => ({
    coinsShortData: state.shortData.coinsShortData,
    isLoaded:  state.shortData.isLoaded,
    numberOfRealTimeCoins: state.shortData.numberOfRealTimeCoins
})

export default compose(connect(mapStateToProps,{}))(RealTimeList);

