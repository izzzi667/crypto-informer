import React  from "react";

const Coin = (props) => 
{
    return(
<div class="ms-Grid" dir="ltr">
  <div class="ms-Grid-row">
    <div class="ms-Grid-col ms-sm3 ms-md3 ms-lg3">
        <img src='https://via.placeholder.com/400' />
        <div class='ms-fontSize-14'>
            Site<br/>Forum<br />Chat<br />
        </div>
        
    </div>
    <div class="ms-Grid-col ms-sm9 ms-md9 ms-lg9">
        <div class='ms-fontSize-68'>Coin Name</div>
        <div class='ms-fontSize-14'>Coin_id: id, symbol: symbol </div>
    
    </div>

  </div>
</div>



    );
}

export default Coin;
