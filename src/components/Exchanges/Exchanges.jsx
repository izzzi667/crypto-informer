import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";
import { Container, Row , Col, Fade} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getExchangesList } from "../../redux/exchangeReducer";


const Exchanges = (props) => 
{
    useEffect(()=>{
        props.getExchangesList();
    },[]);

    if(props.isLoading){
        return <Loading />
    }

    return <span>
        <Row>
            <Col>
                <h3 class="display-3">Exchanges</h3>
            </Col>
        </Row>
        
        
        {props.exchanges.map(e=>        
        <Container>
        <div class="row my-2 shadow-lg">
          <div class="col-md-1"><NavLink to={'/Exchanges/'+e.id}><img class="img-fluid d-block m-3" src={e.image}/></NavLink></div>
          <div class="col-md-11">
            <Row>
              <div class="col-md-12">
                <h4 class="">{e.name}</h4>
              </div>
            </Row>
            <Row>
              <div class="col-md-4"><b>Est:</b> {e.year_established}<br /><b>Country:</b> {e.country}</div>
              <div class="col-md-4"><b>Trust Score:</b> {e.trust_score}<br /><b>Trust Score Rank:</b> {e.trust_score_rank}</div>
              <div class="col-md-4"><b>Trade Volume (BTC):</b> {e.trade_volume_24h_btc}<br /><b>Trading Incentive:</b> {e.has_trading_incentive?'Yes':'No'} </div>
            </Row>
          </div>
        </div>
      </Container>      
    )}</span>
}

let mapStateToProps = (state) => ({
    exchanges: state.exchange.exchangesList,
    isLoading: state.exchange.isLoading
});

export default compose(connect(mapStateToProps, {getExchangesList}))(Exchanges)

