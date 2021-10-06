import React  from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getCoin } from "../../../redux/coinInfoReducer";
import Coin from "./Coin";


class CoinContainer extends React.Component
{
    componentDidMount()
    {        
        this.props.getCoin(this.props.match.params.coinId);
    }
    render(){
        return (
            <Coin {...this.props} />
        );
    }
}

let mapStateToProps = (state) =>({
    coin: state.coin.coin
});

export default compose(
    withRouter,
    connect(mapStateToProps,{getCoin})    
)(CoinContainer);




