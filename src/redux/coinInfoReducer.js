import { cryptoApi } from "../api/crypto";

const GET_COIN_INFO = 'GET_COIN_INFO';
const GET_COIN_HISTORY_DATA = 'GET_COIN_HISTORY_DATA';
const COIN_LOADING_SWITH = 'COIN_LOADING_SWITH';

let inintialState= {
    coin: [],
    coinHistoryData: [],
    isLoading: true,
    numberOfDaysInHistory: 30
};

export const coinInfoReducer = (state= inintialState, action) =>
{
    switch(action.type)
    {
        case GET_COIN_INFO:
            return { ...state, coin: action.coin}
        case COIN_LOADING_SWITH:            
            return { ...state, isLoading: action.isLoading}
        case GET_COIN_HISTORY_DATA:
            return {...state, coinHistoryData: action.coinHistoryData}
        default:
            return state;
    }
}

export const setCoinInfo = (coin) => ({type: GET_COIN_INFO, coin})
export const setCoinHistoryData = (coinHistoryData) => ({type: GET_COIN_HISTORY_DATA, coinHistoryData})
export const switchLoadingCoins = (isLoading) =>({type: COIN_LOADING_SWITH, isLoading})


export const getCoin = (coinId) =>
{
    return (dispatch) =>
    {
        dispatch(switchLoadingCoins(true));
        cryptoApi.getCoinInformation(coinId).then(
            data=>{
                dispatch(setCoinInfo(data.data));                      
                dispatch(switchLoadingCoins(false));          
            }
        );
    }
}

export const getCoinHistory = (coinId, vs_currency, days) =>
{
    return (dispatch) =>
    {
        dispatch(switchLoadingCoins(true));
        cryptoApi.getCoinHistoryData(coinId, vs_currency, days).then(            
            data=>{
                dispatch(setCoinHistoryData(data.data.prices));   
                dispatch(switchLoadingCoins(false));          
            }
        );
    }
}



export default coinInfoReducer;