import { cryptoApi } from "../api/crypto";

const GET_COINS_LISTS = 'GET_COINS_LISTS';
const GET_COINS_LISTS_DETAIL = 'GET_COINS_LISTS_DETAL';
const COINS_LIST_LOADING_SWITH = 'COINS_LIST_LOADING_SWITH';

let initialState  = {
    coins: [
        {id:null, symbol: null, name: null}
    ],
    coinsDetail: [],
    isLoading: true
};

const cryptoReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case GET_COINS_LISTS:
            return {...state, coins: action.coins};
        case GET_COINS_LISTS_DETAIL:
            return {...state, coinsDetail: action.coinsDetail};
        case COINS_LIST_LOADING_SWITH:                    
            return { ...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export const getAllCoins = (coins) =>({type: GET_COINS_LISTS, coins});
export const getAllCoinsDetail = (coinsDetail) =>({type: GET_COINS_LISTS_DETAIL, coinsDetail});
export const switchLoadingCoinsList = (isLoading) =>({type: COINS_LIST_LOADING_SWITH, isLoading})


export const getCoins = () =>
{
    return(dispatch)=>
    {
        dispatch(switchLoadingCoinsList(true));
        cryptoApi.getCoinsList().then(
            data=>{                
                dispatch(getAllCoins(data.data));
                dispatch(switchLoadingCoinsList(false));
            }
        );
    }
}

export const getCoinsDetail = () =>
{
    return(dispatch)=>
    {
        dispatch(switchLoadingCoinsList(true));
        cryptoApi.getCoinsDetailedList().then(
            data=>{                
                dispatch(getAllCoinsDetail(data.data));
                dispatch(switchLoadingCoinsList(false));
            }
        );
    }
}

export default cryptoReducer;