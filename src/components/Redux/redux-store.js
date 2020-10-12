import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {authReducer} from "./auth-reducer";
import { profileReducer } from "./profile-reduer";
import { usersReducer } from "./users-reducer";
import {newsReducer} from "./news-reducer";

let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    usersPage: usersReducer,
    news: newsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
window.store = store;
