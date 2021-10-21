import { exchangeApi } from "../api/crypto";

const GET_EXCHANGES_LIST='GET_EXCHANGE_LIST';
const GET_EXCHANGE_DATA='GET_EXCHANGE_DATA';
const SWITCH_LOADING_STATUS='SWITCH_LOADING_STATUS';

let inintialState = {
    exchangesList: [],
    singleExchgnage: [],
    isLoading: true
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
        default:
            return state;
    }
}

export const getExchangesListAC = (exchangesList) => ({type: GET_EXCHANGES_LIST, exchangesList});
export const getSingleExchangeAC = (singleExchgnage) => ({type: GET_EXCHANGE_DATA, singleExchgnage});
export const swithcIsLoadingStatusAC = (isLoadingStatus) => ({type: SWITCH_LOADING_STATUS, isLoadingStatus});


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