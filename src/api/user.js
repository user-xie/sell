import request from '@/utils/request.js'
// 登录请求
export const checkLogin = (data) => {
    return request({
        method: "post",
        url: "/users/checkLogin",
        data
    })
}
// 获取个人信息
export const accountinfo = (params) => {
    return request({
        method: "get",
        url: "/users/accountinfo",
        params
    })
}
// 用户列表
export const userList = (params) => {
    return request({
        method: "get",
        url: "users/list",
        params
    })
}
// 账号添加
export const userAdd = (data) => {
    return request({
        method: "post",
        url: "/users/add",
        data
    })
}
// 修改密码
export const userseDitpwd = (data) => {
    return request({
        method: "post",
        url: "/users/editpwd",
        data
    })
}
// 获取商品列表
export const goodslList = (params) => {
    return request({
        method: "get",
        url: "/goods/list",
        params
    })
}
// 单个删除商品
export const goodsDel = (params) => {
    return request({
        method: "get",
        url: "/goods/del",
        params
    })
}
// export const accountinfo = (data) => {
//     return request.get('/users/accountinfo', data)
// }