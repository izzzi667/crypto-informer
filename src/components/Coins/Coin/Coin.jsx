import {FontWeights, FontSizes, getTheme, DetailsList, DetailsListLayoutMode, Stack, DefaultPalette} from "@fluentui/react";
import React  from "react";
import { NavLink } from "react-router-dom";

const Coin = (props) => 
{    
    const theme = getTheme();
    //TODO: перенести в селекторы
    let priceData=[];
    for (let currency in props.coin.market_data.current_price)
    {
        priceData.push({
            key: currency, 
            currency, 
            value: props.coin.market_data.current_price[currency],
            ath: props.coin.market_data.ath[currency],
            atl: props.coin.market_data.atl[currency]
        })
    }


    let columns = [
        { key: 'column1', name: 'Currency', fieldName: 'currency', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'ATH (All Time High)', fieldName: 'ath', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'ATH (All Time Low)', fieldName: 'atl', minWidth: 100, maxWidth: 200, isResizable: true },
      ];

    let stackStyle = {
        padding: 20,
        background: DefaultPalette.themeLighter,
        color: DefaultPalette.blackTranslucent40,
       
    }  

    return(

<Stack horizontal>
    <Stack verticalAlign="start" style={stackStyle}>
        <br />
        <img src = {props.coin.image.large} />
       
        <div className='ms-fontSize-14'>
            Genesis date: {props.coin.genesis_date}
        </div>
        <NavLink to={'/history/'+props.coin.id}>History data</NavLink>        
        
    </Stack>
    <Stack verticalAlign="start" style={{padding: 30}}>
        <div style={{ fontSize: FontSizes.size68, fontWeight: FontWeights.regular }}>{props.coin.name}</div>
        <div className='ms-fontSize-14'>Coin_id: {props.coin.id}, symbol: {props.coin.symbol} </div>
        <div className='ms-fontSize-14'><hr />Description:</div>
        <div className='ms-fontSize-14'>{props.coin.description.en.replace(/<\/?[^>]+(>|$)/g, "")}</div>
        <div className='ms-fontSize-14'>
            Curreent coin price


            <DetailsList
                items={priceData}
                columns={columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}

            />
        </div>    
    </Stack>

 </Stack>



    );
}

export default Coin;
