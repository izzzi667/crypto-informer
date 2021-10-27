import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";


const RealTimeGraph = (props) =>
{
    
    if (!props.isLoaded) return null;
    let i=props.match.params.coinId;
    let btcGraph = [];
    props.coinsShortData.map(c=>
    {
        btcGraph.push({x: c.time, y: c.data[i].current_price })
    });
    let h24 = [{x: props.coinsShortData[0].time, y: props.coinsShortData[0].data[0].high_24h},
               {x: props.coinsShortData[props.coinsShortData.length-1].time, y: props.coinsShortData[0].data[0].high_24h}];
    let l24 = [{x: props.coinsShortData[0].time, y: props.coinsShortData[0].data[0].low_24h},
    {x: props.coinsShortData[props.coinsShortData.length-1].time, y: props.coinsShortData[0].data[0].low_24h}];
    debugger;

    return <Container>
<XYPlot height={900} width={1200} margin={{bottom: 80, left: 100}}>
    
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
                    <LineSeries data={btcGraph}/>
                   
                    
                </XYPlot>
    </Container>
    
}

let mapStateToProps = (state) => ({
    coinsShortData: state.shortData.coinsShortData,
    isLoaded:  state.shortData.isLoaded
})

export default compose(withRouter, connect(mapStateToProps,{}))(RealTimeGraph);