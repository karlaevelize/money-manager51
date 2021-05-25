import { combineReducers, createStore } from "redux";
import balanceReducer from "./balance/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const store = createStore(
  combineReducers({
    //registering our reduxer
    balance: balanceReducer,
  }),
  // redux dev tools
  enhancer
);

export default store;