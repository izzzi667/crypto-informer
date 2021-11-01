import { cryptoApi } from "../api/crypto";

const GET_COINS_LISTS_DETAIL = 'GET_COINS_LISTS_DETAL';
const ADD_TO_COINS_LISTS_DETAIL = 'ADD_TO_COINS_LISTS_DETAIL';
const COINS_LIST_LOADING_SWITH = 'COINS_LIST_LOADING_SWITH';
const COINS_LIST_DETAILS_LOADING_SWITH = 'COINS_LIST_DETAILS_LOADING_SWITH';
const GET_GLOBAL_MARKET_DATA = 'GET_GLOBAL_MARKET_DATA ';
const GET_TRENDING = 'GET_TRENDING';

let initialState  = {
    currentCoinsPage: 1,    
    coinsDetail: [],
    global: [],
    isLoading: true,
    detailsIsLoading: false,
    trending: [],
    isLoadingTrending: true
};

const cryptoReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case GET_COINS_LISTS_DETAIL:
            return {...state, coinsDetail: action.coinsDetail};
        case ADD_TO_COINS_LISTS_DETAIL:
            return {...state, currentCoinsPage: action.currentCoinsPage, 
                    coinsDetail:  state.coinsDetail.concat(action.coinsDetail)}
        case COINS_LIST_LOADING_SWITH:                    
            return { ...state, isLoading: action.isLoading}
        case COINS_LIST_DETAILS_LOADING_SWITH:
            return { ...state, detailsIsLoading: action.detailsIsLoading}
        case GET_GLOBAL_MARKET_DATA:
            return {...state, global: action.global}
        case GET_TRENDING:
            return {...state, trending: action.trending, isLoadingTrending: false}
        default:
            return state;
    }
}

export const setTrendingData = (trending) => ({type: GET_TRENDING, trending});
export const getGlobalMarketData = (global) => ({type: GET_GLOBAL_MARKET_DATA, global});
export const getAllCoinsDetail = (coinsDetail) =>({type: GET_COINS_LISTS_DETAIL, coinsDetail});
export const addToAllCoinsDetail = (coinsDetail, currentCoinsPage) =>({type: ADD_TO_COINS_LISTS_DETAIL, coinsDetail, currentCoinsPage});
export const switchLoadingCoinsList = (isLoading) =>({type: COINS_LIST_LOADING_SWITH, isLoading})
export const switchLoadingCoinsDetailsList = (detailsIsLoading) =>({type: COINS_LIST_DETAILS_LOADING_SWITH, detailsIsLoading})



export const getCoinsDetail = () =>
{
    return(dispatch)=>
    {
        dispatch(switchLoadingCoinsList(true));
        cryptoApi.getCoinsDetailedList('usd', 100, 1, 'market_cap_desc').then(
            data=>{                
                dispatch(getAllCoinsDetail(data.data));
                dispatch(switchLoadingCoinsList(false));
            }
        );
    }
}

export const addCoinsDetail = (page) =>
{
    return(dispatch)=>
    {        
        dispatch(switchLoadingCoinsDetailsList(true));
        cryptoApi.getCoinsDetailedList('usd', 100, page, 'market_cap_desc').then(
            data=>{                
                dispatch(addToAllCoinsDetail(data.data, page));
                dispatch(switchLoadingCoinsDetailsList(false));
            }
        );
    }
}

export const getGlobalData = () =>
{
    return(dispatch)=>
    {
        dispatch(switchLoadingCoinsList(true));
        cryptoApi.getGlobalData().then(
            data=>{                
                dispatch(getGlobalMarketData(data.data));
                dispatch(switchLoadingCoinsList(false));
            }
        );
    }
}

export const getTrendingData = () =>
{
    return(dispatch)=>
    {
        cryptoApi.getTrendingData().then(
            data=>{                
                dispatch(setTrendingData(data.data));
            }
        );
    }
}

export default cryptoReducer;