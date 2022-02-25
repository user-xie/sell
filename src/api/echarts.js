import request from '@/utils/request.js'
// 首页报表接口
export const homeEchart = () => {
    return request({
        method: "get",
        url: "/stats/total",
    })
}
// 商品统计报表
// 订单报表接口

export const ordereCharts = () => {
    return request({
        method: "get",
        url: "/stats/order",
    })
}
// 订单报表接口
// export const ordereCharts = () => {
//     return request({
//         method: "get",
//         url: "/stats/order",
//     })
// }