import axios from 'axios'
import qs from 'qs'

axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//创建axios实例
const $axios = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000
});

//请求拦截器
$axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});


export default $axios;