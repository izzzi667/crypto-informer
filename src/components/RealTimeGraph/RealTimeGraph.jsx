import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import { connect } from "react-redux";
import { compose } from "redux";


const RealTimeGraph = (props) =>
{
    
    if (!props.isLoaded) return null;
    let btcGraph = [];
    for(let i=0; i<=4; i++){
        let tmpGraph = []
        props.coinsShortData.map(c=>
        {
            tmpGraph.push({x: c.time, y: c.data[i].current_price })
        });
        btcGraph.push(tmpGraph);
    }
    debugger;

    return <Container>
<XYPlot height={600} width={1200} margin={{
    bottom: 80, left: 100}}>
    
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
                    {btcGraph.map(g=><LineSeries data={g}/>)}
                    
                </XYPlot>
    </Container>
    
}

let mapStateToProps = (state) => ({
    coinsShortData: state.shortData.coinsShortData,
    isLoaded:  state.shortData.isLoaded
})

export default compose(connect(mapStateToProps,{}))(RealTimeGraph);