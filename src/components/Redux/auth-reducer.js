import {authAPI} from "../Api/Api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_PROGRESS_COUNT = 'GET_PROGRESS_COUNT';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    progressCount: 10,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case GET_PROGRESS_COUNT: {
            return {...state, progressCount: action.progressCount}
        }

        default:
            return state;
    }
}


export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const setProgressCount = (progressCount) => ({type: GET_PROGRESS_COUNT, progressCount})

export const AuthUserThunk = () => (dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}

