import React from "react";

const DateDiff = (props) =>
{
    let today = new Date();
    let eventDay = new Date(props.date);
    let diffMs = (today-eventDay); 
    let diffDays = Math.floor(diffMs / 86400000); // days    
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    let displayDays = diffDays!==0?`${diffDays} days `:'';
    let displayHrs = diffHrs!==0?`${diffHrs} hours `:'';
    let displayMins = ` ${diffMins} minutes`;

    return <span>{displayDays}{displayHrs}{displayMins}</span>

}

export default DateDiff;
