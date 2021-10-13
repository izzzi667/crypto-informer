import { cryptoApi } from "../api/crypto";

const GET_COIN_INFO = 'GET_COIN_INFO';
const GET_COIN_HISTORY_DATA = 'GET_COIN_HISTORY_DATA';
const COIN_LOADING_SWITH = 'COIN_LOADING_SWITH';
const SET_NUMBER_OF_DAYS = 'SET_NUMBER_OF_DAYS';
const SET_HISTORY_CURRENCY='SET_HISTORY_CURRENCY';

let inintialState= {
    coin: [],
    coinHistoryData: [],
    isLoading: true,
    numberOfDaysInHistory: 30,
    historyCurrency: 'usd'
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
        case SET_NUMBER_OF_DAYS:
            return {...state, numberOfDaysInHistory: action.numberOfDaysInHistory}
        case SET_HISTORY_CURRENCY:
            return {...state, historyCurrency: action.historyCurrency}
        default:
            return state;
    }
}

export const setCoinInfo = (coin) => ({type: GET_COIN_INFO, coin});
export const setCoinHistoryData = (coinHistoryData) => ({type: GET_COIN_HISTORY_DATA, coinHistoryData});
export const switchLoadingCoins = (isLoading) =>({type: COIN_LOADING_SWITH, isLoading});
export const setHistoryCurrency = (historyCurrency) =>({type: SET_HISTORY_CURRENCY, historyCurrency});
export const setNumbersOfDays = (numberOfDaysInHistory) =>({type: SET_NUMBER_OF_DAYS, numberOfDaysInHistory});



export const getCoin = (coinId) =>
{
    return (dispatch) =>
    {
        dispatch(switchLoadingCoins(true));
        cryptoApi.getCoinInformation(coinId).then(
            data=>{
                console.log(data);
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