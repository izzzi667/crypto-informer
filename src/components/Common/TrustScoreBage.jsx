import React, { useEffect } from "react";
import {Badge} from "react-bootstrap";

const TrustScoreBage = (props) =>
{
    let color;
    switch (props.score){
        case 'green':
            color = 'success';
            break;
        case 'yellow':
            color = 'warning';
            break;
        case 'red':
            color = 'danger';            
            break;
        default:
            color ='warning';                    
    }
    return (
        <Badge bg={color}>Trust Score: {props.score!=null?props.score:'n/a'}</Badge>
    )
}

export default TrustScoreBage;                                  
