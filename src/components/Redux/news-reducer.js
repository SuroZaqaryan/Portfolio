import { newsAPI } from '../Api/Api';

const GET_NEWS = 'GET_NEWS';
const GET_NEWS_COUNTRY = 'GET_NEWS_COUNTRY';

let initialState = {
    news: [],
    newsCountry: [],
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS: {
            return {
                ...state, news: action.news
            }
        }

        case GET_NEWS_COUNTRY: {
            return {
                ...state, newsCountry: action.newsCountry
            }
        }

        default:
            return state;
    }
}

export const newsAC = (news) => ({
    type: GET_NEWS, news
})

export const newsACountry = (newsCountry) => ({
    type: GET_NEWS_COUNTRY, newsCountry
})


export const getNewsThunk = () => {
    return (dispatch) => {
        newsAPI.getNews().then(response => {
            dispatch(newsAC(response.data.articles));
        })
    }
}

export const getNewsCountryThunk = () => {
    return (dispatch) => {
        newsAPI.getCountryNews().then(response => {
            dispatch(newsACountry(response.data.articles));
        })
    }
}