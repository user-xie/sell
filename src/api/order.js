import request from '@/utils/request.js'

// 获取订单列表
export const orderList = (params) => {
    return request({
        method: "get",
        url: "/order/list",
        params
    })
}