import request from '@/utils/request.js'
// 获取店铺详情
export const shopInfo = (params) => {
    return request({
        method: "get",
        url: "/shop/info",
        params
    })
}

// 店铺图片上传功能
export const shopUpload = (data) => {
    return request({
        method: "get",
        url: "/shop/upload",
        data
    })
}