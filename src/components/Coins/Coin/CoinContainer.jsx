import React  from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getCoin } from "../../../redux/coinInfoReducer";
import Loading from "../../Loading/Loading";
import Coin from "./Coin";


class CoinContainer extends React.Component
{
    componentDidMount()
    {        
        this.props.getCoin(this.props.match.params.coinId);
    }
    render(){
        if (this.props.isLoading)  
        {
            return <Loading /> 
        }
        return (
            <Coin {...this.props} />
        );
    }
}

let mapStateToProps = (state) =>({
    coin: state.coin.coin,
    isLoading: state.coin.isLoading
});

export default compose(
    withRouter,
    connect(mapStateToProps,{getCoin})    
)(CoinContainer);




