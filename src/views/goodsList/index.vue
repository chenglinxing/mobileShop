<template>
  <!--商品详情-->
  <div class="goods-list-index">
    <!--头部导航-->
    <tab-header>
      <div class="top" slot="top">
        <div class="top-top">
          <van-icon name="arrow-left" @click="returnGoodsCategory" />
          <div class="goods-list-name">商品列表</div>
        </div>
      </div>
    </tab-header>

    <!--商品列表-->
    <div class="goods-list">
      <b-scroll
        ref="scroll"
        :probeType="3"
        :pullUpload="false"
        class="b-scroll"
      >
        <!-- <goods-list-item
          class="goods-list-item"
          :goodsThirdListData="goodsThirdListData"
        /> -->
        <div
          class="goods-detail"
          v-for="(item, index) in goodsThirdListData"
          :key="index"
          @click="handleGoodsDetail(item.goodsDetaiInfoId)"
        >
          <!--左边图片-->
          <div class="left-img">
            <img :src="item.goodsThirdCategoryImage" alt="" />
          </div>

          <!--右边商品详情信息-->
          <div class="right-detail">
            <!--商品描述-->
            <div class="goods-des">{{ item.goodsThirdCategoryDes }}</div>
            <!--商品标签  商品来源-->
            <div class="goods-tag">
              <van-tag color="#ffe1e1" text-color="#ad0000">{{
                item.goodsThirdCategorySource
              }}</van-tag>
            </div>
            <!--商品价格-->
            <div class="goods-price">{{ item.goodsThirdCategoryPrice }}</div>
          </div>
        </div>
      </b-scroll>
    </div>
  </div>
</template>

<script>
/**eslint disable*/
import BScroll from "@c/scroll.vue";
import { goodsThirdList } from "@/api/getGoods";
export default {
  components: {
    BScroll,
    TabHeader: () => import("@c/header"),
    // goodsListItem: () => import("./components/goodsListItem"),
  },
  watch: {
    goodsThirdListData(newVal) {
      let tag;
      newVal.forEach((i) => {
        this.tagsList.forEach((k) => {
          if (i.goodsThirdCategorySource == k.key) {
            i.goodsThirdCategorySource = k.label;
          }
        });

        /**商品描述只取27位 */
        if (i.goodsThirdCategoryDes.length > 27) {
          i.goodsThirdCategoryDes =
            i.goodsThirdCategoryDes.substring(0, 27) + "...";
        }

        /**加个拼接￥ */
        i.goodsThirdCategoryPrice =
          "￥ " + i.goodsThirdCategoryPrice.toFixed(2);
      });
    },
  },
  data() {
    return {
      goodsList: [],
      goodsThirdListData: [],
      tagsList: [
        { key: 1, label: "京东自营" },
        { key: 2, label: "京东物流" },
        { key: 3, label: "酷动城" },
        { key: 4, label: "放心购" },
      ],
    };
  },
  methods: {
    /**返回上一层 */
    returnGoodsCategory() {
      this.$router.go(-1);
    },

    /**点击商品 */
    handleGoodsDetail(id) {
      console.log(id);

      this.$router.push({
        path: "/goodsDetails",
        query: {
          goodsDetailsId: id,
        },
      });
    },

    /**初始化数据  获取商品三级分类*/
    async init() {
      const { data } = await goodsThirdList();
      /**赋值三级分类 */
      this.goodsThirdListData = data;
      console.log(data, "三级分类");
    },
  },
  created() {
    this.init();
    // let goodsCategoryId = this.$route.query.goodsCategoryId;
  },
};
</script>

<style scoped lang="scss">
.goods-list-index {
  .top-top {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    color: #fff;
    .van-icon,
    .goods-list-name {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .goods-list {
    height: calc(100vh - 46px);
  }

  .b-scroll {
    // width: 5rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0px;
    overflow: hidden;
  }

  .goods-detail {
    // height: 50px;
    display: flex;
    margin: 0.5rem 0.9rem;
    padding: 0 0.1rem;
    justify-content: center;
    align-items: center;
  }

  .right-detail {
    margin-left: 0.7rem;
    font-size: 16px;
    color: #333;
  }
}
</style>