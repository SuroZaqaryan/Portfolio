import React from 'react';
import { newsAPI } from '../Api/Api';

const GET_NEWS = 'GET_NEWS';

let initialState = {
    news: [],
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS: {
            return {
                ...state, news: action.news
            }
        }
        default:
            return state;
    }
}

export const newsAC = (news) => ({
    type: GET_NEWS, news
})


export const getNewsThunk = () => {
    return (dispatch) => {
        newsAPI.getNews().then(response => {
            dispatch(newsAC(response.data.articles));
        })
    }
}