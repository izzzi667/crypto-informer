import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Alert, Row } from "react-bootstrap";
import { connect, useStore } from "react-redux";
import { compose } from "redux";
import { getCoinsShort } from "../../redux/coinShortDataReducer";
import { Icon } from "@fluentui/react";



const CoinsShortData = (props) =>
{
    const [timerEvent, updateTimerEvent] = useState(0);

    useEffect(() => {  
        props.getCoinsShort();  
        const timerId = setInterval(()=>{
            updateTimerEvent(timerEvent+1); 
        },30000);
        return () => clearInterval(timerId);        
    }, [timerEvent]);


    if(!props.isLoaded) return false;

    return <Navbar bg="warning"  expand="lg"  sticky="top" >
        <Container>
            {props.coinsShortData[props.coinsShortData.length - 1].data.slice(0, 5).map(c=>
                <span>
                    <b>{c.symbol}: </b> 
                    {c.current_price} 
                    (1h: {c.price_change_percentage_1h_in_currency.toFixed(3)}%)
                    {c.price_change_percentage_1h_in_currency>0?'▲':'▼'}                    
                </span>
            )}
        </Container>
    </Navbar>
}

let mapStateToProps = (state) =>({
    coinsShortData: state.shortData.coinsShortData,
    isLoaded:  state.shortData.isLoaded
})


export default compose(connect(mapStateToProps,{getCoinsShort}))(CoinsShortData);