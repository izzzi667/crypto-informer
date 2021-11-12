import React from "react";
import { Slider, Stack, Dropdown } from '@fluentui/react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';


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


    return <Stack>
        <Stack horizontal wrap={true} style={{padding: 5}}>
            <Stack style={{width: 400, minWidth:400}} verticalAlign="start">
                <Slider label="Number of days" min={1} max={90} step={1} defaultValue={props.numberOfDaysInHistory} showValue onChanged={props.onDaysUpdate} styles={{width:300}}/>
            </Stack>
            <Stack verticalAlign="start">
                <Dropdown
                    label="Graph currency"
                    defaultSelectedKey={props.historyCurrency}
                    options={options}
                    styles={dropdownStyles}
                    onChanged={props.onCurrencyUpdate}
                />
            </Stack>
        </Stack>
        <ResponsiveContainer width="95%" height={400}>
        <LineChart data={props.graphData}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
        </ResponsiveContainer>
    </Stack>
}

export default History;
