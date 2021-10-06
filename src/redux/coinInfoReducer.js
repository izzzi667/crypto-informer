import { cryptoApi } from "../api/crypto";

const GET_COIN_INFO = 'GET_COIN_INFO';

let inintialState= {
    coin: [
        {
            id:null, 
            symbol: null, 
            name: null, 
            image:[{large: 'https://via.placeholder.com/300.png'}]
        }
    ]
};

export const coinInfoReducer = (state= inintialState, action) =>
{
    switch(action.type)
    {
        case GET_COIN_INFO:
            return { ...state, coin: action.coin}
        default:
            return state;
    }
}

export const getCoinInfo = (coin) => ({type: GET_COIN_INFO, coin})

export const getCoin = (coinId) =>
{
    return (dispatch) =>
    {
        cryptoApi.getCoinInformation(coinId).then(
            data=>{
                debugger;
                dispatch(getCoinInfo(data.data));
            }
        );
    }
}

export default coinInfoReducer;