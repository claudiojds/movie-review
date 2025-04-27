import axios, { AxiosInstance } from 'axios'

const httpInstance: AxiosInstance = axios.create({
    baseURL: "", // pode ser sobrescrito em cada API
    headers: {
        "Content-Type": "aplication/json"
    },
    timeout: 3000
});

httpInstance.interceptors.response.use(
    (res) => res,
    (err) => {
        console.log("Erro na requisição: ", err.response?.data || err.message);
        return Promise.reject(err);
    }
)

export default httpInstance;