//导入axios 
import axios from 'axios'
import Qs from "qs"
import { Message } from 'element-ui';
//配置axios
//服务器基础路径
// axios.defaults.baseURL = 'http://47.108.149.141:3000'
axios.defaults.baseURL = 'http://localhost:5000'


// 拦截器
// 请求拦截器 
// 每次发送接口请求之前 修改相关的配置
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 每次请求接口 添加 token 
    if (localStorage.getItem('user')) {
        let { token } = JSON.parse(localStorage.getItem('user'));
        config.headers.Authorization = token
    }
    if (config.method === 'post') {
        config.data = Qs.stringify(config.data)
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//响应拦截器
// 后端返回了数据---获取后端的数据 code 值
// 添加响应拦截器
axios.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    let { code, msg } = res.data
    if (code === 0) {
        if (msg) {
            Message({
                message: msg,
                type: "success"
            })
        }
    } else if (code == 1) {
        Message({
            message: msg,
            type: "error"
        })

    }

    return res;
}, function (error) {
    // 对响应错误做点什么
    Message({
        message: error.message,
        type: "error"
    })
    return Promise.reject(error);
});

//导出暴露axios
export default axios