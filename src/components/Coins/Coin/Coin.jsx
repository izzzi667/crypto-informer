import { DetailsList, DetailsListLayoutMode } from "@fluentui/react";
import React  from "react";

const Coin = (props) => 
{    
    debugger;

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



    for(let currnecy in props.coin.market_data.current_price)
    {
        console.log(currnecy +' '+props.coin.market_data.current_price[currnecy]);
    }
//ATH (All Time High)
    let columns = [
        { key: 'column1', name: 'Currency', fieldName: 'currency', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'ATH (All Time High)', fieldName: 'ath', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'ATH (All Time Low)', fieldName: 'atl', minWidth: 100, maxWidth: 200, isResizable: true },
      ];

    return(

<div class="ms-Grid" dir="ltr">
  <div class="ms-Grid-row">
    <div class="ms-Grid-col ms-sm3 ms-md3 ms-lg3">
        <br />
        <img src = {props.coin.image.large} />
       
        <div class='ms-fontSize-14'>
            Genesis date: {props.coin.genesis_date}
        </div>
        
    </div>
    <div class="ms-Grid-col ms-sm9 ms-md9 ms-lg9">
        <div class='ms-fontSize-68'>{props.coin.name}</div>
        <div class='ms-fontSize-14'>Coin_id: {props.coin.id}, symbol: {props.coin.symbol} </div>
        <div class='ms-fontSize-14'><hr />Description:</div>
        <div class='ms-fontSize-14'>{props.coin.description.en.replace(/<\/?[^>]+(>|$)/g, "")}</div>
        <div class='ms-fontSize-14'>
            Curreent coin price


            <DetailsList
                items={priceData}
                columns={columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}

            />
        </div>
    
    </div>

  </div>
</div>



    );
}

export default Coin;
