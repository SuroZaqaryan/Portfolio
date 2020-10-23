import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6bec01a1-e00c-42ca-ab9d-a03ad2e730cc",
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
    }
}

export const newsAPI = {
    getNews() {
        return axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-23&sortBy=publishedAt&apiKey=22acb0d726df43638b6f11de2ed1bf6d`);
    },

    getCountryNews() {
        return axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=22acb0d726df43638b6f11de2ed1bf6d`);
    }
}
