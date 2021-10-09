import { cryptoApi } from "../api/crypto";

const GET_COIN_INFO = 'GET_COIN_INFO';
const COIN_LOADING_SWITH = 'COIN_LOADING_SWITH';

let inintialState= {
    coin: [
        {
            id:null, 
            symbol: null, 
            name: null, 
            image:[{large: 'https://via.placeholder.com/300.png'}]
        }
    ],
    isLoading: true
};

export const coinInfoReducer = (state= inintialState, action) =>
{
    switch(action.type)
    {
        case GET_COIN_INFO:
            return { ...state, coin: action.coin}
        case COIN_LOADING_SWITH:            
            return { ...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export const getCoinInfo = (coin) => ({type: GET_COIN_INFO, coin})

export const switchLoadingCoins = (isLoading) =>({type: COIN_LOADING_SWITH, isLoading})

export const getCoin = (coinId) =>
{
    return (dispatch) =>
    {
        dispatch(switchLoadingCoins(true));
        cryptoApi.getCoinInformation(coinId).then(
            data=>{
                dispatch(getCoinInfo(data.data));      
                dispatch(switchLoadingCoins(false));          
            }
        );
    }
}

export default coinInfoReducer;