import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getCoinHistory, setNumbersOfDays, setHistoryCurrency } from "../../../redux/coinInfoReducer";
import Loading from "../../Loading/Loading";
import History from "./History";


class CoiunHistoryContainer extends React.Component
{
 

    constructor(props)
    {
        super(props);
    }
    
    componentDidMount()
    {
        this.props.getCoinHistory(this.props.match.params.coinId, this.props.historyCurrency, this.props.numberOfDaysInHistory);
    }
    onDaysUpdate(e, value)
    {
        this.props.setNumbersOfDays(value);        
        this.props.getCoinHistory(this.props.match.params.coinId, this.props.historyCurrency, value);        
    }
    onCurrencyUpdate(e)
    {
        debugger;
        this.props.setHistoryCurrency(e.key);        
        this.props.getCoinHistory(this.props.match.params.coinId, e.key, this.props.numberOfDaysInHistory);        
    }
    render() {
        //TODO: Перенести подальше
        let graphData =[];
        this.props.coinHistoryData.map(c => {
            let currDate = Date(c[0]);
            graphData.push({
                name: currDate,
                price: c[1]
            })
        });

        if (this.props.isLoading)  
        {
            return <Loading  /> 
        }
        return <History 
            graphData={graphData} 
            onDaysUpdate={this.onDaysUpdate.bind(this)} 
            onCurrencyUpdate={this.onCurrencyUpdate.bind(this)}
            numberOfDaysInHistory={this.props.numberOfDaysInHistory}
            historyCurrency={this.props.historyCurrency}
            />
    };
}



let mapStateToProps = (state) =>(    
    {
    isLoading: state.coin.isLoading,
    coinHistoryData:state.coin.coinHistoryData,
    numberOfDaysInHistory: state.coin.numberOfDaysInHistory,
    historyCurrency: state.coin.historyCurrency
});


export default compose(withRouter, connect(mapStateToProps,{getCoinHistory, setNumbersOfDays, setHistoryCurrency}))(CoiunHistoryContainer);
