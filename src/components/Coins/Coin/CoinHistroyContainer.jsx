import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getCoinHistory } from "../../../redux/coinInfoReducer";
import Loading from "../../Loading/Loading";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


class CoiunHistoryContainer extends React.Component
{
    componentDidMount()
    {
        this.props.getCoinHistory(this.props.match.params.coinId, 'usd', 30);
    }
    render() {


        if (this.props.isLoading)  
        {
            return <Loading /> 
        }
        let graphData =[];
        this.props.coinHistoryData.map(c => {
            let currDate = Date(c[0]);
            graphData.push({
                name: currDate,
                price: c[1]
            })
        });
        debugger;
        return <LineChart width={1200} height={800} data={graphData}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    };
}


let mapStateToProps = (state) =>(    
    {
    isLoading: state.coin.isLoading,
    coinHistoryData:state.coin.coinHistoryData    
});


export default compose(withRouter, connect(mapStateToProps,{getCoinHistory}))(CoiunHistoryContainer);