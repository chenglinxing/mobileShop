<template>
  <!--商品详情页-->
  <div class="goods-details">
    <!--头部导航栏-->
    <van-tabs
      class="van-tabs"
      v-model:active="active"
      scrollspy
      sticky
      @scroll="handleScroll"
      @click="handleTabs"
    >
      <!--左侧内容-->
      <div class="left-return" slot="nav-left">
        <van-icon name="arrow-left" @click="returnGoodsList" />
      </div>

      <!--右侧购物车-->
      <div class="right-share" slot="nav-right">
        <van-icon name="shopping-cart-o" @click="shoppingCart" />
      </div>

      <!-- <b-scroll
        ref="scroll"
        :probeType="3"
        :pullUpload="false"
        class="b-scroll"
      > -->
      <!--商品-->
      <van-tab title="商品">
        <!--图片轮播-->
        <swiper-image class="swiper-image" :goodsImageList="goodsImageList" />
        <!--商品详细信息-->
        <details-info :goodsIntroduction="goodsIntroduction" />
      </van-tab>

      <!--详情-->
      <van-tab title="详情">详情 </van-tab>

      <!--评价-->
      <van-tab title="评价">评价 </van-tab>

      <!--推荐-->
      <van-tab title="推荐">推荐 </van-tab>
      <!-- </b-scroll> -->
    </van-tabs>

    <van-sku
      v-model="showBase"
      :sku="skuData.sku"
      :goods="skuData.goods_info"
      :goods-id="skuData.goods_id"
      :hide-stock="skuData.sku.hide_stock"
      :quota="skuData.quota"
      :quota-used="skuData.quota_used"
      :initial-sku="initialSku"
      reset-stepper-on-hide
      reset-selected-sku-on-hide
      disable-stepper-input
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />

    <!--购物车-->
    <add-goods-cart @addToCart="addToCart" @buyNow="buyNow" />
  </div>
</template>

<script>
import { goodsDetailInfo } from "@/api/getGoods";
import skuData from "./skuData";

export default {
  components: {
    // HeaderNav: () => import("./components/headerNav"),
    SwiperImage: () => import("./components/swiperImage"),
    DetailsInfo: () => import("./components/detailsInfo"),
    AddGoodsCart: () => import("./components/addGoodsCart"),
    BScroll: () => import("@c/scroll.vue"),
  },
  data() {
    return {
      active: 0,
      tabsList: [
        { key: 0, title: "商品" },
        { key: 1, title: "评价" },
        { key: 2, title: "详情" },
        { key: 3, title: "推荐" },
      ], //tabs

      // sku: {}, //商品 sku 数据
      goodsDetaiInfo: [], //商品详情信息
      // isShowSku: false, //默认隐藏商品规格
      // goods: {}, //商品信息
      // goodsId: "", //商品Id
      // quota: 0, //限购数，0 表示不限购
      // quotaUsed: 1, //已经购买过的数量
      // hideStock: false, //是否显示商品库存
      // messageConfig: {}, //留言相关配置

      skuData: skuData,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      initialSku: {
        //默认选中
        s1: "30349",
        s2: "1193",
        selectedNum: 3,
      },

      goodsImageList: [], //商品图片  存入轮播
      goodsIntroduction: {}, //商品介绍
    };
  },
  methods: {
    handleScroll(a) {
      console.log(a, "a");
    },
    handleTabs(a, b) {
      console.log(a, b);
      this.active = a;
    },

    /**返回上一层 */
    returnGoodsList() {
      window.localStorage.removeItem("goodsDetaiInfo");
      this.$router.go(-1);
    },

    /**打开购物车 */
    shoppingCart() {},

    /**点击加入购物车  子组件传入 */
    addToCart() {
      // this.showBase = true;
      let shopObj = {
        goodsSource: this.goodsIntroduction.goodsSource, //商家名称ID
        goodsList: [],
        shopChecked: false,
      };

      let goodsObj = {
        goodsId: this.goodsIntroduction.goodsId, //商品id
        goodsName: this.goodsIntroduction.goodsItdName, //商品名称
        goodsPrice: this.goodsIntroduction.goodsItdPrice, //商品价格
        // goodsImage:,//商品图片
        // goodsParams:,//商品参数
        goodsNum: 1,
        goodsChecked: false,
      };

      let store = this.$store.state.shoppingCartList;
      if (store.length > 0) {
        store.forEach((i) => {
          //当商家id相同时
          if (i.goodsSource == this.goodsIntroduction.goodsSource) {
            //当商品id相同时
            i.goodsList.forEach((k) => {
              if (k.goodsId == this.goodsIntroduction.goodsId) {
                k.goodsNum += 1;
                console.log("商家id相同  商品id相同");
              } else {
                i.goodsList.push(goodsObj);
                console.log("商家id相同  商品id不同");
              }
            });
          } else {
            //当商家id不相同时
            shopObj.goodsList.push(goodsObj);
            store.push(shopObj);
          }
        });
      } else {
        shopObj.goodsList.push(goodsObj);
        this.$store.state.shoppingCartList.push(shopObj);
      }

      this.$router.push("shoppingCart");
      console.log(shopObj, "商品");
    },

    /**点击立即购买  子组件传入 */
    buyNow() {
      //先判断用户是否登录  未登录点击完后跳转登录页
      console.log(this.$store.state.userLogin.login);
      if (!this.$store.state.userLogin.login) {
        this.$router.replace("/login");
      }
    },

    /**点击轮播的图片 */
    handleImage(index) {
      console.log(index);
    },

    onBuyClicked() {},

    onAddCartClicked() {},
    /**初始化商品详情数据 */
    async init() {
      /**防止mock造的数据与频繁切换页面发生数据紊乱 将
       * 第一次请求的数据放到缓存中
       * 如果缓存中数据不为空则取缓存中数据  反之取接口数据
       * */
      let data;
      if (localStorage.getItem("goodsDetailsInfo") == null) {
        this.goodsDetaiInfo = [];
        data = await goodsDetailInfo();
        console.log(data, "商品详情信息");

        localStorage.setItem("goodsDetailsInfo", JSON.stringify(data));
      } else {
        data = JSON.parse(localStorage.getItem("goodsDetailsInfo"));
      }

      /**取出对应商品详情id的数据 */
      let goodsDetailInfoId = this.$route.query.goodsDetailsId;
      data.data.forEach((i) => {
        if (Number(goodsDetailInfoId) == Number(i.goodsDetailInfoId)) {
          //赋值商品信息
          this.goodsDetaiInfo.push(i);
          //赋值商品介绍
          this.goodsIntroduction = i.goodsIntroduction;
          //存放商品图片
          this.goodsImageList = i.goodsImageList;
        }
      });
      console.log(data, "data");
      console.log(this.goodsImageList, "goodsImageList");
    },
  },
  created() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.goods-details {
  height: calc(100vh - 60px);
  overflow: auto;

  .left-return,
  .right-share {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
  }

  .left-return {
    margin-left: 0.9rem;
  }

  .right-share {
    margin-right: 0.9rem;
  }

  .van-goods-action {
    box-sizing: border-box;
    width: 100%;
  }

  .swiper-image {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .b-scroll {
    height: calc(100vh - 50px);
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0px;
    overflow: hidden;
  }
}

::-webkit-scrollbar {
  display: none;
}

// ::-webkit-scrollbar-track{
//   background-color: red;
// }
</style>