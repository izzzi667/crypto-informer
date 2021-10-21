import React from "react";

const DatePrint = (props) =>
{
    let eventDay = new Date(props.date);
    let dd = eventDay.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = eventDay.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = eventDay.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    let hh = eventDay.getHours();
    if (hh < 10) hh = '0' + hh;

    let m = eventDay.getMinutes();
    if (m < 10) m = '0' + m;

    let s = eventDay.getSeconds();
    if (s < 10) s = '0' + s;
    
    let returnString = dd + '.' + mm + '.' +yy + ' '+hh+':'+m+':'+s;

    return <span>{returnString}</span>

}

export default DatePrint;
