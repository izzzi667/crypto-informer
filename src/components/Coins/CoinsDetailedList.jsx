import React, { useEffect } from "react";
import { getCoinsDetail } from "../../redux/cryptoReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Loading from "../Loading/Loading";
import { Col, Row} from "react-bootstrap";
import CoinsListCard from "./CoinsListCard/CoinsListCard";


const CoinsDetailedList = (props) =>
{
    useEffect(() => {
        props.getCoinsDetail();        
    }, []);

    if(props.isLoading){
        return <Loading />
    }

    return <div>
    <Row><Col><h3 class="display-3">Coins by market cap</h3></Col>

    </Row>

    <Row className="g-4">    
      {props.coins.map(c =>
        <CoinsListCard coinInfo={c}/>
      )}            
  </Row>
  </div>
}


let mapStateToProps = (state) => ({
    coins: state.crypto.coinsDetail,
    isLoading: state.crypto.isLoading,
});

export default compose(connect(mapStateToProps,{getCoinsDetail}))(CoinsDetailedList);