import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {authReducer} from "./auth-reducer";
import { profileReducer } from "./profile-reduer";
import { usersReducer } from "./users-reducer";
import {newsReducer} from "./news-reducer";
import {lessonReducer} from "./lesson-reducer";
import {contentCourseReducer} from "./courses-reducer";

let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    usersPage: usersReducer,
    lessonReducer: lessonReducer,
    news: newsReducer,
    contentCourse: contentCourseReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
window.store = store;
