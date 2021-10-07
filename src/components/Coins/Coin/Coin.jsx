import React  from "react";

const Coin = (props) => 
{    
    debugger;

    if(typeof props.coin.asset_platform_id == "undefined")
    {
        return null
    }

    for(let currnecy in props.coin.market_data.current_price)
    {
        console.log(currnecy +' '+props.coin.market_data.current_price[currnecy]);
    }

    return(

<div class="ms-Grid" dir="ltr">
  <div class="ms-Grid-row">
    <div class="ms-Grid-col ms-sm3 ms-md3 ms-lg3">
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
            <table>
                <tr><th>Currency</th><th>Value</th><th>ATH (All Time High)</th></tr>
                {
                    Object.keys(props.coin.market_data.current_price).map(currency =>
                        (
                            <tr><td>{currency}</td><td>{props.coin.market_data.current_price[currency]}</td><td>{props.coin.market_data.ath[currency]}</td></tr>
                        ))
                }
            </table>
        </div>
    
    </div>

  </div>
</div>



    );
}

export default Coin;
