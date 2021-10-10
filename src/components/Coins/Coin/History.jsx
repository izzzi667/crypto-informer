import React from "react";
import { Slider, IStackTokens, Stack, IStackStyles, Dropdown } from '@fluentui/react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export const History =(props) =>
{
    const options = [
        { key: 'aed', text: 'United Arab Emirates dirham' },
        { key: 'eur', text: 'Euro' },
        { key: 'gbp', text: 'Pound sterling' },
        { key: 'btc', text: 'Bitcoin' },
        { key: 'jpy', text: 'Japanese yen' },
        { key: 'rub', text: 'Russian rouble' },
        { key: 'usd', text: 'United States dollar' },
      ];

      const dropdownStyles  = {
        dropdown: { width: 300 },
      };


    return <div>    
        <Dropdown
            label="Graph currency"
            defaultSelectedKey={props.historyCurrency}
            options={options}
            styles={dropdownStyles}
            onChanged={props.onCurrencyUpdate}
        />
        <Slider label="Number of days" min={1} max={90} step={1} defaultValue={props.numberOfDaysInHistory} showValue onChanged={props.onDaysUpdate} />

        <LineChart width={1200} height={800} data={props.graphData}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    </div>
}

export default History;