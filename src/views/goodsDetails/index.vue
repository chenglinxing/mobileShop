<template>
  <!--商品详情页-->
  <div class="goods-details">
    <!--头部导航栏-->
    <van-tabs
      v-model="active"
      scrollspy
      sticky
      @scroll="scroll"
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

      <van-tab
        v-for="(item, index) in tabsList"
        :title="item.title"
        :key="index"
      >
        <!--商品-->
        <div v-if="index == 0">
          <!--图片轮播-->
          <swiper-image class="swiper-image" :goodsImageList="goodsImageList" />

          <!--商品详细信息-->
          <details-info />
        </div>
      </van-tab>
    </van-tabs>

    <!--商品规格-->
    <!-- <van-sku
      v-model="isShowSku"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="hideStock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    /> -->

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
    <add-goods-cart @addToCart="addToCart"/>
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
      // goodsDetaiInfo: [], //商品详情信息
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
    };
  },
  methods: {
    scroll(a) {
      console.log(a);
    },
    handleTabs(a, b) {
      console.log(111);
      console.log(a, b);
    },

    /**返回上一层 */
    returnGoodsList() {
      window.localStorage.removeItem("goodsDetaiInfo");
      this.$router.go(-1);
    },

    /**打开购物车 */
    shoppingCart() {},

    /**点击加入购物车  子组件传入 */
    addToCart(){
      this.showBase=true
    },

    onBuyClicked() {},
    onAddCartClicked() {},
    /**初始化商品详情数据 */
    async init() {
      this.goodsDetaiInfo = [];
      const { data } = await goodsDetailInfo();
      console.log(data, "商品详情信息");
      /**取出对应商品详情id的数据 */
      let goodsDetailInfoId = this.$route.query.goodsDetailsId;
      data.forEach((i) => {
        if (Number(goodsDetailInfoId) == Number(i.goodsDetailInfoId)) {
          this.goodsDetaiInfo.push(i);
        }
      });
      //存放商品图片
      this.goodsImageList = this.goodsDetaiInfo[0].goodsImageList;
    },
  },
  created() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.goods-details {
  height: 100vh;
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
  }
}
</style>