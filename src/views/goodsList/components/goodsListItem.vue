<template>
  <div class="goods-list-item">
    <!-- <b-scroll ref="scroll" :probeType="3" :pullUpload="false" class="b-scroll"> -->
    <!-- {{ goodsThirdList }} -->
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
    <!-- </b-scroll> -->
  </div>
</template>

<script>
/**eslint disable*/
import BScroll from "@c/scroll.vue";
export default {
  props: {
    goodsThirdListData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      goodsThirdList: [], //商品三级分类数据
      goodsDetaiInfo: {}, //商品详情信息
      tagsList: [
        { key: 1, label: "京东自营" },
        { key: 2, label: "京东物流" },
        { key: 3, label: "酷动城" },
        { key: 4, label: "放心购" },
      ],
    };
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
  components: {
    BScroll,
  },
  methods: {
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
  },
  created() {
    //   this.$bus.$on("goodsThirdList", (res) => {
    //     // this.goodsThirdList = res;
    //     this.$set(this.goodsThirdList,"a","re")
    //     console.log(res, "res");
    //     console.log(this.goodsThirdList,'goodsThirdList')
    //   });
    // this.goodsThirdList = JSON.parse(
    //   window.localStorage.getItem("goodsThirdList")
    // );
    // console.log(this.goodsThirdList, "goodsThirdList");
  },
};
</script>

<style lang="scss" scoped>
.goods-list-item {
  // height: calc(100vh - 46px);
  .goods-detail {
    // height: 50px;
    display: flex;
    margin: 0.5rem 0.9rem;
    padding: 0 0.1rem;
    justify-content: center;
    align-items: center;
  }

  .b-scroll {
    // width: 5rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    overflow: hidden;
  }

  .right-detail {
    margin-left: 0.7rem;
    font-size: 16px;
    color: #333;
  }
}
</style>