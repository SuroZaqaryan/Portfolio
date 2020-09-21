import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    auth: authReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
