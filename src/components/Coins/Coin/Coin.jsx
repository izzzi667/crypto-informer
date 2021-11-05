import {FontWeights, FontSizes, getTheme, Stack, DefaultPalette, Icon} from "@fluentui/react";
import React  from "react";
import { NavLink } from "react-router-dom";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Container, Row , Col, Card, Table, Tab, Tabs,ListGroup, Badge, OverlayTrigger, Tooltip} from "react-bootstrap";
import DatePrint from "../../Common/DatePrint";

const NUMBER_OF_RT_COINS=8;

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

    debugger;
    let stackStyle = {
        padding: 10,
        background: DefaultPalette.themeLighter,
        color: DefaultPalette.blackTranslucent40,
       
    } 


    return(<span>
        <Row>
            <Col>    
                <h3 class="display-3">{props.coin.name}</h3>
                <p>{props.coin.description.en.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            </Col>
        </Row>
<Container>
    <Row>
    <div class="col-md-3">
        <br />
        <img src = {props.coin.image.large} />
        <br />        <br />
        <ListGroup>
                <ListGroup.Item variant="warning"><b>General</b></ListGroup.Item>
                {props.coin.genesis_date!=null && <ListGroup.Item>Genesis date:  {props.coin.genesis_date}</ListGroup.Item>}
                <ListGroup.Item>Coin Id: {props.coin.id} </ListGroup.Item>
                <ListGroup.Item>Symbol: {props.coin.symbol} </ListGroup.Item>
                <ListGroup.Item>Algorithm: {props.coin.hashing_algorithm} </ListGroup.Item>                                
        </ListGroup>
        <br />
        <ListGroup>
                <ListGroup.Item variant="warning"><b>Financial performance</b></ListGroup.Item>
                <ListGroup.Item><NavLink to={`/coins/${props.coin.id}/history`}>History data</NavLink></ListGroup.Item>
                {props.coin.market_data.market_cap_rank<=NUMBER_OF_RT_COINS ? <ListGroup.Item> <NavLink to={'/Realtime/'+props.coin.market_data.market_cap_rank}>View real-time graph</NavLink></ListGroup.Item>:''}
                {props.coin.market_data.market_cap['usd']!=0 && <ListGroup.Item>Market cap: {props.coin.market_data.market_cap['usd']}$ </ListGroup.Item>}
                {props.coin.market_data.market_cap_rank!=0 && <ListGroup.Item>Market cap rank: {props.coin.market_data.market_cap_rank} </ListGroup.Item>}                
                {props.coin.market_data.total_volume['usd']!=0 && <ListGroup.Item>Total Volume: {props.coin.market_data.total_volume['usd']}$ </ListGroup.Item>}
                {props.coin.market_data.total_supply!=0 && <ListGroup.Item>Total Supply: {props.coin.market_data.total_supply} </ListGroup.Item>}
                {props.coin.market_data.max_supply!==0 && <ListGroup.Item>Max Supply: {props.coin.market_data.max_supply} </ListGroup.Item>}
                {props.coin.market_data.circulating_supply!=0 && <ListGroup.Item>Circulating Supply: {props.coin.market_data.circulating_supply} </ListGroup.Item>}
        </ListGroup>

        <br />
        <ListGroup>
            <ListGroup.Item variant="warning"><b>Links</b></ListGroup.Item>
                {props.coin.links.homepage[0]!='' && <ListGroup.Item><Icon iconName="Website" /> <a href={props.coin.links.homepage[0]}>Homepage</a></ListGroup.Item> }
                {props.coin.links.homepage[1]!='' && <ListGroup.Item><Icon iconName="Website" /> <a href={props.coin.links.homepage[1]}>Homepage 2</a></ListGroup.Item> }
                {props.coin.links.homepage[2]!='' && <ListGroup.Item><Icon iconName="Website" /> <a href={props.coin.links.homepage[2]}>Homepage 3</a></ListGroup.Item> }
                {props.coin.links.blockchain_site[0]!='' && <ListGroup.Item><Icon iconName="Link12" /> <a href={props.coin.links.blockchain_site[0]}>Blockchain site 1</a></ListGroup.Item> }
                {props.coin.links.blockchain_site[1]!='' && <ListGroup.Item><Icon iconName="Link12" /> <a href={props.coin.links.blockchain_site[1]}>Blockchain site 2</a></ListGroup.Item> }
                {props.coin.links.blockchain_site[2]!='' && <ListGroup.Item><Icon iconName="Link12" /> <a href={props.coin.links.blockchain_site[2]}>Blockchain site 3</a></ListGroup.Item> }
                {props.coin.links.blockchain_site[3]!='' && <ListGroup.Item><Icon iconName="Link12" /> <a href={props.coin.links.blockchain_site[3]}>Blockchain site 4</a></ListGroup.Item> }
                {props.coin.links.blockchain_site[4]!='' && <ListGroup.Item><Icon iconName="Link12" /> <a href={props.coin.links.blockchain_site[4]}>Blockchain site 5</a></ListGroup.Item> }
                {props.coin.links.official_forum_url[0]!='' && <ListGroup.Item><Icon iconName="TextBox" /> <a href={props.coin.links.official_forum_url[0]}>Official Forum</a></ListGroup.Item> }
                {props.coin.links.official_forum_url[1]!='' && <ListGroup.Item><Icon iconName="TextBox" /> <a href={props.coin.links.official_forum_url[1]}>Official Forum 2</a></ListGroup.Item> }
                {props.coin.links.official_forum_url[2]!='' && <ListGroup.Item><Icon iconName="TextBox" /> <a href={props.coin.links.official_forum_url[2]}>Official Forum 3</a></ListGroup.Item> }
                {props.coin.links.chat_url[0]!='' && <ListGroup.Item><Icon iconName="Comment" /> <a href={props.coin.links.chat_url[0]}>Coin's chat</a></ListGroup.Item> }
                {props.coin.links.chat_url[1]!='' && <ListGroup.Item><Icon iconName="Comment" /> <a href={props.coin.links.chat_url[1]}>Coin's chat 2</a></ListGroup.Item> }
                {props.coin.links.chat_url[2]!='' && <ListGroup.Item><Icon iconName="Comment" /> <a href={props.coin.links.chat_url[2]}>Coin's chat 3</a></ListGroup.Item> }
                {props.coin.links.subreddit_url!=null && <ListGroup.Item><Icon iconName="Group" /> <a href={props.coin.links.subreddit_url}>Reddit</a></ListGroup.Item> }
                {props.coin.links.repos_url.github[0]!=null && <ListGroup.Item><Icon iconName="GitGraph" /> <a href={props.coin.links.repos_url.github[0]}>Github</a></ListGroup.Item> }
        </ListGroup>
        </div>


        

        
    <div class="col-md-9">       
            <Table striped bordered hover size="sm"  responsive >
                    <thead>
                        <tr>
                        <th>Currency</th>
                        <th>Value</th>
                        <th>ATH (All Time High)</th>
                        <th>ATH Change Percentage</th>
                        <th>ATL (All Time Low)</th>
                        <th>ATL Change Percentage</th>
                        <th>ATL Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {priceData.map(p=>
                            <tr>
                                <td>{p.currency}</td>
                                <td>{p.value}</td>
                                <td>{p.ath}</td>
                                <td>{p.athPercent}</td>
                                <td>{p.atl}</td>
                                <td>{p.atlPercent}</td>
                                <td><DatePrint date={p.atlDate} /></td>
                            </tr>
                            )}
                    </tbody>
            </Table>
            
    </div>
    </Row>
    </Container>
    </span>


    );
}

export default Coin;
