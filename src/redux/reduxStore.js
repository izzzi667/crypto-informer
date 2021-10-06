import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMuddleware from 'redux-thunk';
import cryptoReducer from './cryptoReducer';
import coinInfoReducer from './coinInfoReducer';



let reducers = combineReducers({
    crypto: cryptoReducer,
    coin: coinInfoReducer
});

let store= createStore(reducers, applyMiddleware(thunkMuddleware));
export default store;