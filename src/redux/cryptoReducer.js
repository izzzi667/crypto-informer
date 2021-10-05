import { cryptoApi } from "../api/crypto";

const GET_COINS_LISTS = 'GET_COINS_LISTS';

let initialState  = {
    coins: [
        {id:null, symbol: null, name: null}
    ]
};

const cryptoReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case GET_COINS_LISTS:
            return {...state, coins: action.coins};
        default:
            return state;
    }
}

export const getAllCoins = (coins) =>({type: GET_COINS_LISTS, coins});

export const getCoins = () =>
{
    return(dispatch)=>
    {
        cryptoApi.getCoinsList().then(
            data=>{                
                dispatch(getAllCoins(data.data));
            }
        );
    }
}

export default cryptoReducer;