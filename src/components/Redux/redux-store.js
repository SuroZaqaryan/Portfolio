import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {authReducer} from "./auth-reducer";
import { usersReducer } from "./users-reducer";

let reducers = combineReducers({
    auth: authReducer,
    usersPage: usersReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
