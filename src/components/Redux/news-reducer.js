import { newsAPI } from '../Api/Api';

const GET_NEWS = 'GET_NEWS';
const GET_NEWS_COUNTRY = 'GET_NEWS_COUNTRY';
const GET_APPLE = 'GET_APPLE';
const GET_TECHCRUNCH = 'GET_TECHCRUNCH';

let initialState = {
    News_Bitcoin: [],
    News_Country: [],
    News_Apple: [],
    News_TechCrunch: [],
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_NEWS: {
            return {
                ...state, News_Bitcoin: action.News_Bitcoin
            }
        }

        case GET_NEWS_COUNTRY: {
            return {
                ...state, News_Country: action.News_Country
            }
        }

        case GET_APPLE: {
            return {
                ...state, News_Apple: action.News_Apple
            }
        }

        case GET_TECHCRUNCH: {
            return {
                ...state, News_TechCrunch: action.News_TechCrunch
            }
        }

        default:
            return state;
    }
}

export const newsAC = (News_Bitcoin) => ({
    type: GET_NEWS, News_Bitcoin
})

export const newsACountry = (News_Country) => ({
    type: GET_NEWS_COUNTRY, News_Country
})

export const newsApple = (News_Apple) => ({
    type: GET_APPLE, News_Apple
})

export const newsTechCrunch = (News_TechCrunch) => ({
    type: GET_TECHCRUNCH, News_TechCrunch
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

export const getNewsTechCrunch = () => {
    return (dispatch) => {
        newsAPI.getTechCrunch().then(response => {
            dispatch(newsTechCrunch(response.data.articles));
        })
    }
}