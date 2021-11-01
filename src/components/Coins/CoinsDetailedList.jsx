import React, { useEffect, useState } from "react";
import { getCoinsDetail, addCoinsDetail } from "../../redux/cryptoReducer";
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

    const [offset, setOffset] = useState(0);

    useEffect(() => {
      window.onscroll = () => {
        setOffset(document.documentElement.scrollHeight-window.pageYOffset);        
      }
    }, []);

    useEffect(()=>{      
      if(offset<1000 && !props.isLoading &&!props.detailsIsLoading ){
        let newPage =props.page+1
        props.addCoinsDetail(newPage);
      }
    },[offset]);

    if(props.isLoading){
        return <Loading />
    }
    
    
    return <div>
    <Row>
      <Col><h3 className="display-3">Coins by market cap</h3></Col>
    </Row>

    <Row className="g-4" >    
      {props.coins.map(c =>
        <CoinsListCard coinInfo={c}/>
      )}            
    </Row>
    {props.detailsIsLoading?<Loading />:null}
    
  </div>
}


let mapStateToProps = (state) => ({
    coins: state.crypto.coinsDetail,
    page: state.crypto.currentCoinsPage,
    isLoading: state.crypto.isLoading,
    detailsIsLoading: state.crypto.detailsIsLoading
});

export default compose(connect(mapStateToProps,{getCoinsDetail, addCoinsDetail}))(CoinsDetailedList);
