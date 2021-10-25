import { exchangeApi, getExchangeHistoryData } from "../api/crypto";

const GET_EXCHANGES_LIST='GET_EXCHANGE_LIST';
const GET_EXCHANGE_DATA='GET_EXCHANGE_DATA';
const GET_HISTORY_EXCHANGE_DATA='GET_HISTORY_EXCHANGE_DATA';
const SWITCH_LOADING_STATUS='SWITCH_LOADING_STATUS';
const SWITCH_LOADING_HISTORY_STATUS='SWITCH_LOADING_HISTORY_STATUS';


let inintialState = {
    exchangesList: [],
    singleExchgnage: [],
    historyExchangeData: [],
    numberOfDays: 7,
    isLoading: true,
    isLoadingHistory: true
}

export const exchangeReducer = (state=inintialState, action) =>
{
    switch(action.type)
    {
        case GET_EXCHANGES_LIST:
            return {...state, exchangesList:action.exchangesList}
        case GET_EXCHANGE_DATA:
            return {...state, singleExchgnage:action.singleExchgnage}
        case SWITCH_LOADING_STATUS:
            return {...state, isLoading:action.isLoadingStatus}
        case SWITCH_LOADING_HISTORY_STATUS:
            return {...state, isLoadingHistory:action.isLoadingHistory}
        case GET_HISTORY_EXCHANGE_DATA:
            return {...state, historyExchangeData: action.historyExchangeData, numberOfDays: action.numberOfDays}
        default:
            return state;
    }
}

export const getExchangesListAC = (exchangesList) => ({type: GET_EXCHANGES_LIST, exchangesList});
export const getSingleExchangeAC = (singleExchgnage) => ({type: GET_EXCHANGE_DATA, singleExchgnage});
export const swithcIsLoadingStatusAC = (isLoadingStatus) => ({type: SWITCH_LOADING_STATUS, isLoadingStatus});
export const swithcIsLoadingHistoryStatusAC = (isLoadingHistory) => ({type: SWITCH_LOADING_HISTORY_STATUS, isLoadingHistory});
export const getHistoryExchangeDataAC = (historyExchangeData, numberOfDays) =>({ type: GET_HISTORY_EXCHANGE_DATA, historyExchangeData, numberOfDays})

export const getExchangesList = ()=>
{
    return (dispatch) => 
    {
        dispatch(swithcIsLoadingStatusAC(true));
        exchangeApi.getExchangeList().then(
            data=>{
                dispatch(getExchangesListAC(data.data));
                dispatch(swithcIsLoadingStatusAC(false));
            }
        );
    }
}

export const getExchangeData = (exchangeId)=>
{
    return (dispatch) => 
    {
        dispatch(swithcIsLoadingStatusAC(true));
        exchangeApi.getSingleExchangeData(exchangeId).then(
            data=>{
                dispatch(getSingleExchangeAC(data.data));
                dispatch(swithcIsLoadingStatusAC(false));
            }
        );
    }
}

export const getHistoryExchangeData = (exchangeId, numberOfDays)=>
{
    return (dispatch) => 
    {        
        dispatch(swithcIsLoadingHistoryStatusAC(true));
        exchangeApi.getExchangeHistoryData(exchangeId, numberOfDays).then(
            data=>{
                dispatch(getHistoryExchangeDataAC(data.data,numberOfDays ));     
                dispatch(swithcIsLoadingHistoryStatusAC(false));
            }
        );
    }
}