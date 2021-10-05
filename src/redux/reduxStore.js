import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMuddleware from "redux-thunk";
import cryptoReducer from "./cryptoReducer";



let reducers = combineReducers({crypto: cryptoReducer});

let store= createStore(reducers, applyMiddleware(thunkMuddleware));
export default store;