import request from '@/utils/request.js'
// 获取店铺详情
export const shopInfo = (params) => {
    return request({
        method: "get",
        url: "/shop/info",
        params
    })
}

// 店铺内容修改

export const shopEdit = (data) => {
    return request({
        method: "post",
        url: "/shop/edit",
        data
    })
}