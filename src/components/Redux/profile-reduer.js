import {profileAPI} from "../Api/Api";

const ADD_PROFILE = "ADD_PROFILE";
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profile: null,
    status: "",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE:
            return {
                ...state, profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state, status: action.status
            };
        default:
            return state;
    }
};

export const getStatusProfile = (status) => ({
    type: SET_STATUS, status
});

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getStatusProfile(status));
            }
        });
};

export const profileAC = (profile) => ({
    type: ADD_PROFILE, profile
});

export const getStatusProfileStatusThunk = (userID) => {
    return (dispatch) => {
        profileAPI.getUserProfileStatus(userID).then(response => {
            dispatch(getStatusProfile(response.data));
        });
    }
};
