import React from "react";

const DateDiff = (props) =>
{
    debugger;
    var today = new Date();
    var eventDay = new Date(props.date);
    var diffMs = (today-eventDay); 
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    return <span>{diffDays!=0 && {diffDays} +' days'} {diffHrs!=0 && ' '+{diffHrs} +' hours'}  {}  {diffMins} minutes</span>

}

export default DateDiff;