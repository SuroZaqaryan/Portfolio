const ADD_PROFILE = "ADD_PROFILE";

let initialState = {
    profile: null,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
}

export const profileAC = (profile) => ({
    type: ADD_PROFILE, profile
})