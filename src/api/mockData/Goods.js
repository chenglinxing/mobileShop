/*eslint-disable*/
let Mock = require("mockjs")
const Random = require('mockjs').Random;



/**随机颜色 */
function randomColorByR() {
    let a = Math.random()
    if (!(a * 255 > 180 && a * 255 < 225)) {
        return randomColorByR()
    }
    return Math.floor(a * 255)
}

function randomColorByG() {
    let b = Math.random()
    if (!(b * 255 > 140 && b * 255 < 225)) {
        return randomColorByG()
    }
    return Math.floor(b * 255)
}

function randomColorByB() {
    let c = Math.random()
    if (!(c * 255 > 140 && c * 255 < 255)) {
        return randomColorByB()
    }
    return Math.floor(c * 255)
}

let randomColor = "rbg(" + randomColorByR() + "," + randomColorByG() + "," + randomColorByB() + ")"

/**随机商品名 */
function randomGoodsName() {
    let goodsNameList = ["阿迪", "Nike", "Vans", "华为", "小米", "GUCCI", "Dickies", "~~~", "GOODS"]
    return goodsNameList(Math.floor(Math.random() * goodsNameList.length))

}


//例如： 一级分类=>家电   家电的二级分类=>电视   电视的三级分类=>小米电视
/***模拟分类数据 */
let mockData = Mock.mock(/\/goodsCategoryData/, "get", {
    /**15条分类数据 */
    "data|15-25": [{
        // "goodsThirdSelfSupportSource":["自营","京东物流","酷动城"][(Math.floor(Math.random()*3))],
        //商品一级分类id
        "goodsCategoryId|+1": 1,
        //商品分类名称
        "goodsCategoryName": "@cword(3)",
        //二级分类的总称
        "goodsSecondTerm": "@cword(4)",
        //一级分类 包含多个二级分类
        // "goodsCategoryBySecond|4-15": [
        //     {
        //         //二级分类的id
        //         "goodsCategorySecondId|+1": 100,
        //         //二级分类的图片
        //         "goodsSecondImage": Random.image('55x55', "#67bdc5"),//Random.image('55x55', randomColor),
        //         //二级分类的名称
        //         "goodsSecondName": "@first(3-5)",
        //         //三级分类
        //         "goodsThirdList|5-20": [{
        //             //三级分类的id
        //             "goodsCategoryThirdId|+1": 1000,
        //             //三级分类的商品图片
        //             "goodsThirdImage": Random.image('100x100', "#84a545", "GUCCI"),
        //             //三级分类的商品描述
        //             "goodsThirdDes": "@ctitle(35)",
        //             //三级分类的商品自营来源
        //             "goodsThirdSelfSupportSource|1-4": 1,
        //             //三级分类的价格
        //             "goodsThirdPrice|50-6000": 50,

        //             //商品详情信息  =>  通过三级分类进入
        //             "goodsDetaiInfo": {
        //                 //商品图片
        //                 "goodsImage": Random.image('100x100', "#629edc"),
        //                 //商品介绍
        //                 "goodsIntroduction": "@cword(50)",
        //                 //商品评价
        //                 "goodsEvaluate|1-4": [{
        //                     //用户头像
        //                     "userProfile": Random.image('25x25', "#a4c553", "商品"),
        //                     //用户昵称
        //                     "userNickname": "@cname",
        //                     //用户评价
        //                     "userEvaluate|1-5": 3,
        //                     //用户评论
        //                     "userComment": "@cword(20)",
        //                     //用户购买商品类型
        //                     "userBuyGoodsType": "@cword(5)",
        //                 }]
        //                 //商品详情
        //                 //商品推荐
        //             }
        //         }]
        //     }
        // ]
    }]
})

/**一级分类 */
export let goodsFirst = Mock.mock(/\/goodsFirst/, "get", {
    "data|15": [{
        //商品一级分类id
        "goodsFirstCategoryId|+1": 1,
        //商品分类名称
        "goodsFirstCategoryName": "@cword(3)",
        //二级分类的总称
        "goodsSecondTerm": "@cword(4)",
        //一级分类对应二级分类ID  
        "goodsSecondCategoryId|+1": 100
    }]
})

/**二级分类 */
export let goodsSecond = Mock.mock(/\/goodsSecond/, "get", {
    "data|15": [{
        //二级分类ID
        "goodsSecondCategoryId|+1": 100,
        "data|5-15": [{
            //二级分类名称   
            "goodsSecondCategoryName": "@first(3-5)",
            //二级分类图片  
            "goodsSecondCategoryImage": Random.image('55x55', "#67bdc5"),
            //二级分类对应三级分类的ID  
            "goodsThirdCategoryId|+1": 1000
        }]
    }]
})

/**三级分类 */
export let goodsThird = Mock.mock(/\/goodsThird/, "get", {
    //三级分类ID  
    "goodsThirdCategoryId|+1": 1000,
    "data|15": [{
        //三级分类描述   
        "goodsThirdCategoryDes": "@ctitle(35)",
        //三级分类图片  
        "goodsThirdCategoryImage": Random.image('100x100', "#84a545", "GUCCI"),
        //三级分类来源  
        "goodsThirdCategorySource|1-4": 1,
        //三级分类价格   
        "goodsThirdCategoryPrice|50-6000": 50,
        //商品详情信息Id   goodsDetaiInfoId   {}
        "goodsDetaiInfoId|+1": 500,
    }]
})

/**商品详情信息 */
export let goodsDetailInfo = Mock.mock(/\/goodsDetailInfo/, "get", {
    "data|15": [{
        //商品详情信息Id   goodsDetaiInfoId   {}
        "goodsDetailInfoId|+1": 500,
        //商品图片List
        "goodsImageList|3-5": [
            {
                //商品图片
                "goodsImage": Random.image('100x100', "#629edc", "Image"),
            }
        ],
        //商品介绍   
        "goodsIntroduction": {
            //商品名称    
            "goodsItdName": "@cword(5)",
            //商品描述    
            "goodsItdDec": "@cword(30)",
            //商品价格    
            "goodsItdPrice|150-2000": 150,
        },

        //商品评价     {}
        "goodsEvaluate": {
            //用户头像  
            "userProfile": Random.image('25x25', "#629edc", "Image"),
            //用户昵称   
            "userNickname": "@cword(3)",
            //用户评价（评分）  
            "userEvaluate|1-5": 3,
            //用户评论   
            "userComment|20-35": "@cword",
            //用户购买商品类型   
            "userBuyGoodsType|1-4": 2,
        },

        //商品详情     {}
        "goodsDetails": {
            //商品详情图片  
            "goodsDetailsImage": Random.image('75x75', "#629edc", "Image"),
            //商品规格  
            "goodsSpecification|90-2500": 150,
        },

        //商品推荐ID  goodsReId
        "goodsReId|+1": 500
    }]
})

/**商品推荐 */
export let goodsRecommendation = Mock.mock(/\/goodsRecommendation/, "get", {
    //商品推荐    []
    "goodsRecommendation|8-12": [
        {
            //商品名称   
            "goodsReName": "@cword(5)",
            //商品描述   
            "goodsRemDec|25-35": "@ctitle",
            //商品价格   
            "goodsRemPrice|99-999": 99,
            //商品来源   
            "goodsRemSource|1-4": 1
        }
    ]
})

// export default mockData