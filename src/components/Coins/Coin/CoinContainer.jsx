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
        if(this.props.coin.length == 0) return(null);        

        return (
            <Coin {...this.props} />
        );
    }
}

let mapStateToProps = (state) =>({
    coin: state.coin.coin,
    isLoading: state.coin.isLoading,
    numberOfRealTimeCoins: state.shortData.numberOfRealTimeCoins
});

export default compose(
    withRouter,
    connect(mapStateToProps,{getCoin})    
)(CoinContainer);




