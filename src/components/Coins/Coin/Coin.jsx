import React  from "react";

const Coin = (props) => 
{    
    debugger;

    if(typeof props.coin.asset_platform_id == "undefined")
    {
        return null
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

    
    </div>

  </div>
</div>



    );
}

export default Coin;
