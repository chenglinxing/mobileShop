import service from "./request"
// import { goodsFirst } from "@/api/mockData/Goods.js";

/**获取一级分类 */
export const goodsFirstList = () =>
    service.get({
        url: '/goodsFirst'
    })

/**获取二级分类 */
export const goodsSecondList = () =>
    service.get({
        url: '/goodsSecond'
    })


/**获取三级分类 */
export const goodsThirdList = () =>
    service.get({
        url: '/goodsThird'
    })

/**获取商品详情信息 */
export const goodsDetailInfo = () =>
    service.get({
        url: "/goodsDetailInfo"
    })

/**获取商品推荐 */
export const goodsRecommendation = () =>
    service.get({
        url: '/goodsSecond'
    })