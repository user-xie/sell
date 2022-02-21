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
// 单个删除账号
export const userDel = (params) => {
    return request({
        method: "get",
        url: "/users/del",
        params
    })
}
//  批量删除账号

export const usersBatchdel = (params) => {
    return request({
        method: "get",
        url: "/users/batchdel",
        params
    })
}
// 修改账号信息
export const modifyuser = (data) => {
    return request({
        method: "post",
        url: "/users/edit",
        data
    })
}
//  获取商品分类

export const goodsCatlist = (params) => {
    return request({
        method: "get",
        url: "/goods/catelist",
        params
    })
}
