import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMuddleware from 'redux-thunk';
import cryptoReducer from './cryptoReducer';
import coinInfoReducer from './coinInfoReducer';
import { newsReducer } from './newsReducer';



let reducers = combineReducers({
    crypto: cryptoReducer,
    coin: coinInfoReducer,
    news: newsReducer
});


let store= createStore(reducers, applyMiddleware(thunkMuddleware));
export default store;