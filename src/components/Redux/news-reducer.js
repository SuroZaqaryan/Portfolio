import { newsAPI } from '../Api/Api';

const GET_NEWS = 'GET_NEWS';
const GET_NEWS_COUNTRY = 'GET_NEWS_COUNTRY';
const GET_APPLE = 'GET_APPLE';

let initialState = {
    news: [],
    newsCountry: [],
    newsApple: [],
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

        case GET_APPLE: {
            return {
                ...state, newsApple: action.newsApple
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

export const newsApple = (newsApple) => ({
    type: GET_APPLE, newsApple
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

export const getNewsAppleThunk = () => {
    return (dispatch) => {
        newsAPI.getApple().then(response => {
            dispatch(newsApple(response.data.articles));
        })
    }
}