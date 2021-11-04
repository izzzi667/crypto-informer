import React from 'react';

const ThrendingIcon = (props) =>
{
    return <span>{props.value>0?'▲':'▼'}</span>
}

export default ThrendingIcon;