import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCoins } from "../../redux/cryptoReducer";
import Loading from "../Loading/Loading";
import Coins from "./Coins";


class CoinsContainer extends React.Component
{
    componentDidMount(){
        this.props.getCoins();
    }
    render()
    {
        if(this.props.isLoading){
            return <Loading />
        }
        return <Coins coins={this.props.coins} />;
    }
}


let mapStateToProps = (state) =>(    
    {
    coins: state.crypto.coins,
    isLoading: state.crypto.isLoading,
});


export default compose(connect(mapStateToProps,{getCoins}))(CoinsContainer);