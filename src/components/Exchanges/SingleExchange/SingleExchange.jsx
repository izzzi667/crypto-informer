import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getExchangeData, getHistoryExchangeData } from "../../../redux/exchangeReducer";
import { withRouter } from "react-router";
import Loading from "../../Loading/Loading";
import { NavLink } from "react-router-dom";
import { Container, Row , Col, Card, Table, Tab, Tabs,ListGroup, Badge, OverlayTrigger, Tooltip} from "react-bootstrap";
import DatePrint from '../../Common/DatePrint'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTelegramPlane, faSlackHash, faRedditSquare } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import DateDiff from "../../Common/DateDIff";
import '../../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import TrustScoreBage from "../../Common/TrustScoreBage";


const SingleExchange = (props) =>
{
    useEffect(()=>{
        props.getExchangeData(props.match.params.exchangeId);
        props.getHistoryExchangeData(props.match.params.exchangeId, props.numberOfDays);
    },[]);


    if(props.isLoading || props.isLoadingHistory){
        return <Loading />
    }


      let data=[];
      props.hsitoryExchange.map(h=>{data.push({x: h[0], y: Math.round(h[1])})})


    return <span>
        <Row>
            <Col>    
                <h3 class="display-3"><img src={props.exchange.image} />{props.exchange.name}</h3>
            </Col>
        </Row>
         <Container>
      <div class="row">
        <div class="col-md-3">
            <ListGroup>
                <ListGroup.Item variant="warning"><b>Information</b></ListGroup.Item>
                <ListGroup.Item>Est: {props.exchange.year_established}</ListGroup.Item>
                <ListGroup.Item>Country: {props.exchange.country} </ListGroup.Item>
                <ListGroup.Item>Total Rank: {props.exchange.trust_score_rank} </ListGroup.Item>
                <ListGroup.Item>Trust Score: {props.exchange.trust_score} </ListGroup.Item>
                <ListGroup.Item>Trade volume 24h (btc): {props.exchange.trade_volume_24h_btc} </ListGroup.Item>                                
            </ListGroup>
            <br />
            <ListGroup>
                <ListGroup.Item variant="warning">
                    <b>Links</b></ListGroup.Item>
                <ListGroup.Item>
                    <FontAwesomeIcon icon={faLink} />{' '}
                    <a href ={props.exchange.url}>{props.exchange.name} Website</a>
                </ListGroup.Item>
                <ListGroup.Item>
                    <FontAwesomeIcon icon={faRedditSquare} />{' '}
                    <a href={props.exchange.reddit_url}>Reddit</a>
                </ListGroup.Item>
                <ListGroup.Item>
                    <FontAwesomeIcon icon={faSlackHash} />{' '}
                    <a href={props.exchange.slack_url}>Slack</a>
                </ListGroup.Item>
                <ListGroup.Item>
                    <FontAwesomeIcon icon={faTelegramPlane} />{' '}
                    <a href={props.exchange.telegram_url}>Telegram</a>
                </ListGroup.Item>
                <ListGroup.Item>
                    <FontAwesomeIcon icon={faFacebookSquare} />{' '}
                    <a href={props.exchange.facebook_url}>Facebook</a>
                </ListGroup.Item>
                
            </ListGroup>
        </div>
        <div class="col-md-9">
            <Card><Card.Body>
            <Tabs defaultActiveKey="tickers">
            <Tab eventKey="tickers" title="Tickers">
                <Table striped bordered hover size="sm"  responsive >
                    <thead>
                        <tr>
                        <th>Base</th>
                        <th>Target</th>
                        <th>Last</th>
                        <th>Volume</th>
                        <th>Last traded</th>
                        <th>Status</th>
                        <th>Trade Url</th>
                        </tr>
                    </thead>
                    <tbody>
                {props.exchange.tickers.map(t=>
                        <tr>
                        <td>{t.coin_id!=null?<NavLink to={'/coins/'+t.coin_id}>{t.base}</NavLink>:t.base}</td>
                        <td>{t.target_coin_id!=null?<NavLink to={'/coins/'+t.target_coin_id}>{t.target}</NavLink>:t.target}</td>
                        <td><OverlayTrigger
                            placement='right'
                            overlay={
                                <Tooltip>
                                  <b>Converted:</b><br />{t.converted_last.btc} BTC<br />
                                  {t.converted_last.eth} ETH<br />
                                  {t.converted_last.usd} USD<br />
                                </Tooltip>
                              }
                            >
                            <span>{t.last}</span></OverlayTrigger></td>
                        <td>
                        <OverlayTrigger
                            placement='right'
                            overlay={
                                <Tooltip>
                                  <b>Converted:</b><br />{t.converted_volume.btc} BTC<br />
                                  {t.converted_volume.eth} ETH<br />
                                  {t.converted_volume.usd} USD<br />
                                </Tooltip>
                              }
                            >
                            <span>{t.volume}</span>
                            </OverlayTrigger></td>
                        <td><DatePrint date={t.last_traded_at}/></td>
                        <td><TrustScoreBage score ={t.trust_score}/>{' '}
                            {t.is_anomaly&&<Badge bg="danger">Is Anomaly</Badge>}{' '}
                            {t.is_stale&&<Badge bg="danger">Is Stale</Badge>}
                        </td>
                        <td>{t.trade_url&&<a href={t.trade_url}>{t.base}-{t.target}</a>}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Tab>
            <Tab eventKey="news" title="News">
                {props.exchange.status_updates.map(s=>
                        <Col lg={12} md={12} p={12} className='shadow-sm bg-light m-2' ><Row>
                        <Col>
                          <p class="lead mb-1 mt-2"> <b>{s.user} </b> </p>
                          <p><small>{s.user_title}</small></p>
                          <p class="mb-0">{s.description}</p>
                          <p><small><DateDiff date={s.created_at} /> ago #{s.category}</small></p>
                        </Col>
                      </Row> 
                      </Col>  



                    )}            
            </Tab>
            <Tab eventKey="graph" title="Volume Chart">
                <XYPlot height={600} width={600} margin={{
    bottom: 80, left: 100}}>
    
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis
                        attr="x"
                        attrAxis="y"
                        orientation="bottom"
                        tickFormat={function tickFormat(d){return new Date(d).toLocaleDateString()}}
                        tickLabelAngle={-90}
                    />
                    <YAxis 
                        attr="y"
                        attrAxis="x"
                        orientation="left"
                    />
                    <LineSeries color="orange" data={data} />
                </XYPlot>
                <br /><br /><br />
            </Tab>
            </Tabs>      
            </Card.Body></Card>
        </div>
      </div>
    </Container>
    </span>
}

let mapStateToProps = (state) => ({
    exchange: state.exchange.singleExchgnage,
    isLoading: state.exchange.isLoading,
    isLoadingHistory: state.exchange.isLoadingHistory,
    hsitoryExchange: state.exchange.historyExchangeData,
    numberOfDays: state.exchange.numberOfDays
});

export default  compose(withRouter,connect(mapStateToProps, {getExchangeData, getHistoryExchangeData}))(SingleExchange);

