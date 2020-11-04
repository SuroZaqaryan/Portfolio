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

    follow(userId) {
        return instance.post(`follow/${userId}`, {}, {})
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`, {})
    },
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
    }
}

export const newsAPI = {
    getNews() {
        return axios.get(`http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=c867f8e027f44cada97083bf1d5a8a86`);
    },

    getCountryNews() {
        return axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c867f8e027f44cada97083bf1d5a8a86`);
    },

    getApple() {
        return axios.get(`http://newsapi.org/v2/everything?q=apple&from=2020-10-25&to=2020-10-25&sortBy=popularity&apiKey=22acb0d726df43638b6f11de2ed1bf6d`);
    },

    getTechCrunch() {
        return axios.get(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c867f8e027f44cada97083bf1d5a8a86`);
    }
}
