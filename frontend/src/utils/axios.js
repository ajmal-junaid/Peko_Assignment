import axios from 'axios';
import showToast from '../components/Modal/Toast';
import Cookies from "js-cookie";

const baseUrl = 'http://localhost:4000/api'

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})

instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            showToast("Session timeout", 3000, "warning")
            setTimeout(function () {
                Cookies.remove("token");
    //navigate("/login");
                window.location.href = '/login';
            }, 3000);
        }
        return Promise.reject(error);
    }
);

export default instance;