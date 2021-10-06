import React  from "react";
import { withRouter } from "react-router";
import { compose } from "redux";
import Coin from "./Coin";


class CoinContainer extends React.Component
{
    componentDidMount()
    {
        
    }
    render(){
        return (
            <Coin {...this.props} />
        );
    }
}

export default compose(withRouter)(CoinContainer);
