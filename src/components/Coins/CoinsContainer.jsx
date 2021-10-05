import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCoins } from "../../redux/cryptoReducer";
import Coins from "./Coins";


class CoinsContainer extends React.Component
{
    componentDidMount(){
        this.props.getCoins();
    }
    render()
    {
        return <Coins coins={this.props.coins} />;
    }
}


let mapStateToProps = (state) =>({
    coins: state.crypto.coins
});

export default compose(connect(mapStateToProps,{getCoins}))(CoinsContainer);