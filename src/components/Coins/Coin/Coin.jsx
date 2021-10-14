import {FontWeights, FontSizes, getTheme, Stack, DefaultPalette, Icon} from "@fluentui/react";
import React  from "react";
import { NavLink } from "react-router-dom";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Coin = (props) => 
{    
    const theme = getTheme();
    //TODO: перенести в селекторы
    let priceData=[];
    for (let currency in props.coin.market_data.current_price)
    {
        priceData.push({            
            currency, 
            value: props.coin.market_data.current_price[currency],
            ath: props.coin.market_data.ath[currency],
            athPercent: props.coin.market_data.ath_change_percentage[currency],
            atlPercent: props.coin.market_data.atl_change_percentage[currency],
            atlDate: props.coin.market_data.atl_date[currency],
            atl: props.coin.market_data.atl[currency]
        })
        
    }


    let stackStyle = {
        padding: 10,
        background: DefaultPalette.themeLighter,
        color: DefaultPalette.blackTranslucent40,
       
    } 


    return(

<Stack horizontal>
    <Stack verticalAlign="start" style={stackStyle}>
        <br />
        <img src = {props.coin.image.large} />
       
        <div className='ms-fontSize-18'>
            <div className='ms-fontSize-24'>General:</div>
            <ul>
                {props.coin.genesis_date!=null && <li>Genesis date: {props.coin.genesis_date}</li> }
                <li>Coin_id: {props.coin.id}</li>
                <li>Symbol: {props.coin.symbol} </li>
                <li>Algorithm: {props.coin.hashing_algorithm} </li>
            </ul>
        </div>
        <div className='ms-fontSize-18'>
            <div className='ms-fontSize-24'>Financial performance:</div>
            <ul>                
                <li><NavLink to={'/history/'+props.coin.id}>History data</NavLink></li>
                {props.coin.market_data.market_cap['usd']!=0 && <li>Market cap: {props.coin.market_data.market_cap['usd']}$</li>}
                {props.coin.market_data.market_cap_rank!=0 && <li>Market cap rank: {props.coin.market_data.market_cap_rank}</li>}
                {props.coin.market_data.total_volume['usd']!=0 && <li>Total Volume: {props.coin.market_data.total_volume['usd']}$</li>}
                {props.coin.market_data.total_supply!=0 && <li>Total Supply: {props.coin.market_data.total_supply}</li>}
                {props.coin.market_data.max_supply!=0 && <li>Max Supply: {props.coin.market_data.max_supply}</li>}
                {props.coin.market_data.circulating_supply!=0 && <li>Circulating Supply: {props.coin.market_data.circulating_supply}</li>}
            </ul>
        </div>
        <div className='ms-fontSize-18'>
            <div className='ms-fontSize-24'>Links:</div>
            <ul>
                {props.coin.links.homepage[0]!='' && <li><Icon iconName="Website" /> <a href={props.coin.links.homepage[0]}>Homepage</a></li> }
                {props.coin.links.homepage[1]!='' && <li><Icon iconName="Website" /> <a href={props.coin.links.homepage[1]}>Homepage 2</a></li> }
                {props.coin.links.homepage[2]!='' && <li><Icon iconName="Website" /> <a href={props.coin.links.homepage[2]}>Homepage 3</a></li> }
                {props.coin.links.blockchain_site[0]!='' && <li><Icon iconName="Link12" /> <a href={props.coin.links.blockchain_site[0]}>Blockchain site 1</a></li> }
                {props.coin.links.blockchain_site[1]!='' && <li><Icon iconName="Link12" /> <a href={props.coin.links.blockchain_site[1]}>Blockchain site 2</a></li> }
                {props.coin.links.blockchain_site[2]!='' && <li><Icon iconName="Link12" /> <a href={props.coin.links.blockchain_site[2]}>Blockchain site 3</a></li> }
                {props.coin.links.blockchain_site[3]!='' && <li><Icon iconName="Link12" /> <a href={props.coin.links.blockchain_site[3]}>Blockchain site 4</a></li> }
                {props.coin.links.blockchain_site[4]!='' && <li><Icon iconName="Link12" /> <a href={props.coin.links.blockchain_site[4]}>Blockchain site 5</a></li> }
                {props.coin.links.official_forum_url[0]!='' && <li><Icon iconName="TextBox" /> <a href={props.coin.links.official_forum_url[0]}>Official Forum</a></li> }
                {props.coin.links.official_forum_url[1]!='' && <li><Icon iconName="TextBox" /> <a href={props.coin.links.official_forum_url[1]}>Official Forum 2</a></li> }
                {props.coin.links.official_forum_url[2]!='' && <li><Icon iconName="TextBox" /> <a href={props.coin.links.official_forum_url[2]}>Official Forum 3</a></li> }
                {props.coin.links.chat_url[0]!='' && <li><Icon iconName="Comment" /> <a href={props.coin.links.chat_url[0]}>Coin's chat</a></li> }
                {props.coin.links.chat_url[1]!='' && <li><Icon iconName="Comment" /> <a href={props.coin.links.chat_url[1]}>Coin's chat 2</a></li> }
                {props.coin.links.chat_url[2]!='' && <li><Icon iconName="Comment" /> <a href={props.coin.links.chat_url[2]}>Coin's chat 3</a></li> }
                {props.coin.links.subreddit_url!=null && <li><Icon iconName="Group" /> <a href={props.coin.links.subreddit_url}>Reddit</a></li> }
                {props.coin.links.repos_url.github[0]!=null && <li><Icon iconName="GitGraph" /> <a href={props.coin.links.repos_url.github[0]}>Github</a></li> }
            </ul>
        </div>


        

        
    </Stack>
    <Stack verticalAlign="start" style={{padding: 30}}>
        <div style={{ fontSize: FontSizes.size68, fontWeight: FontWeights.regular }}>{props.coin.name}</div>
        <div className='ms-fontSize-16'>{props.coin.description.en.replace(/<\/?[^>]+(>|$)/g, "")}</div>
        <br />
        <div className='ms-fontSize-28'>
            Current coin price
                <div className="ag-theme-alpine" style={{height: 700, width: 1500}}>
                    <AgGridReact
                    rowData={priceData}>
                    <AgGridColumn field="currency" headerName="Currency" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="value" headerName="Value" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="ath" headerName="ATH (All Time High)" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="athPercent" headerName="ATH Change Percentage" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="atl"  headerName="ATH (All Time Low)" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="atlPercent"  headerName="ATL Change Percentage" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="atlDate"  headerName="ATL Date" sortable={ true } filter={ true }></AgGridColumn>
                </AgGridReact>
            </div>

            
        </div>    
    </Stack>

 </Stack>



    );
}

export default Coin;
