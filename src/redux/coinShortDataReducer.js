import { cryptoApi } from "../api/crypto";


const GET_COINS_SHORT_DATA = 'GET_COINS_SHORT_DATA';


let initialState  = {
    coinsShortData: [],
    isLoaded: false
};

const coinShortDataReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case GET_COINS_SHORT_DATA:
            return {...state, coinsShortData: [...state.coinsShortData, {data: action.coins, time: Date.now() }], isLoaded:true};
        default:
            return state;
        
    }
}

export const getCoinsShortData = (coins) =>({type: GET_COINS_SHORT_DATA, coins});



export const getCoinsShort = () =>
{
    return(dispatch)=>
    {
        cryptoApi.getCoinsDetailedList('usd','8','1').then(
            data=>{          
                dispatch(getCoinsShortData(data.data));
            }
        );
    }
}


export default coinShortDataReducer;