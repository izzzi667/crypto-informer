import { cryptoApi } from "../api/crypto";

const GET_COINS_LISTS = 'GET_COINS_LISTS';
const COINS_LIST_LOADING_SWITH = 'COINS_LIST_LOADING_SWITH';

let initialState  = {
    coins: [
        {id:null, symbol: null, name: null}
    ],
    isLoading: true
};

const cryptoReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case GET_COINS_LISTS:
            return {...state, coins: action.coins};
        case COINS_LIST_LOADING_SWITH:            
            return { ...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export const getAllCoins = (coins) =>({type: GET_COINS_LISTS, coins});
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

export default cryptoReducer;