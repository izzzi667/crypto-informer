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
        <NavLink to={'/history/'+props.coin.id}>History data</NavLink>    

        
    </Stack>
    <Stack verticalAlign="start" style={{padding: 30}}>
        <div style={{ fontSize: FontSizes.size68, fontWeight: FontWeights.regular }}>{props.coin.name}</div>
        <div className='ms-fontSize-16'>{props.coin.description.en.replace(/<\/?[^>]+(>|$)/g, "")}</div>
        <br />
        <div className='ms-fontSize-28'>
            Current coin price
                <div className="ag-theme-alpine" style={{height: 700, width: 900}}>
                    <AgGridReact
                    rowData={priceData}>
                    <AgGridColumn field="currency" headerName="Currency" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="value" headerName="Value" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="ath" headerName="ATH (All Time High)" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="atl"  headerName="ATH (All Time Low)" sortable={ true } filter={ true }></AgGridColumn>
                </AgGridReact>
            </div>


        </div>    
    </Stack>

 </Stack>



    );
}

export default Coin;
