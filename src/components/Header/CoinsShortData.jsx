import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCoinsShort } from "../../redux/coinShortDataReducer";
import ThrendingIcon from "../Common/ThrendingIcon";



const CoinsShortData = (props) =>
{
    const [timerEvent, updateTimerEvent] = useState(0);

    useEffect(() => {  
        props.getCoinsShort(props.numberOfRealTimeCoins);  
        const timerId = setInterval(()=>{
            updateTimerEvent(timerEvent+1); 
        },30000);
        return () => clearInterval(timerId);        
    }, [timerEvent]);


    if(!props.isLoaded) return false;

    return <Navbar bg="warning"  expand="lg"  sticky="top" >
        <Container>
            {props.coinsShortData[props.coinsShortData.length - 1].data.slice(0, 5).map(c=>
                <span key={c.symbol}>
                    <b>{c.symbol}: </b> 
                    {c.current_price} 
                    (1h: {c.price_change_percentage_1h_in_currency.toFixed(3)}%)
                    <ThrendingIcon value = {c.price_change_percentage_1h_in_currency} />                    
                </span>
            )}
        </Container>
    </Navbar>
}

let mapStateToProps = (state) =>({
    coinsShortData: state.shortData.coinsShortData,
    isLoaded:  state.shortData.isLoaded,
    numberOfRealTimeCoins: state.shortData.numberOfRealTimeCoins

})


export default compose(connect(mapStateToProps,{getCoinsShort}))(CoinsShortData);