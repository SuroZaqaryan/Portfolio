import {usersAPI} from "../Api/Api";

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW_USERS = 'FOLLOW_USERS';

let initialState = {
    users: [],
    followedUsers: [],
    pageSize: 5, // сколько юзеров будет отоброжать на странице
    totalUsersCount: 0, // общее кол-во юзеров
    currentPage: 1, // текущая страница
    follow: false,

};

export let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }

        case FOLLOW_USERS: {
            return {...state, followedUsers: action.followedUsers}
        }

        case SET_CURRENT_PAGE: { // текущая страница
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: { // общее кол-во юзеров
            return {...state, totalUsersCount: action.count}
        }

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }


        default:
            return state;
    }
}

export const followUsers = (followedUsers) => ({type: FOLLOW_USERS, followedUsers});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});

export const followUsersThunk = () => {
    return (dispatch) => {
        usersAPI.getUsers().then(data => {
            dispatch(followUsers(data.items));
        });
    }
}

export const followThunk = (userID) => {
    return (dispatch) => {
        usersAPI.follow(userID).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(follow(userID))
            }
        })
    }
}

export const unfollowThunk = (userID) => {
    return (dispatch) => {
        usersAPI.unfollow(userID).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollow(userID))
            }
        })
    }
}


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export default usersReducer;
