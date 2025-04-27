import axios, { AxiosInstance } from 'axios'

const httpInstance: AxiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3", 
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 3000
});

httpInstance.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error("Erro na requisição: ", err.response?.data || err.message);
        return Promise.reject(err);
    }
);

export default httpInstance;