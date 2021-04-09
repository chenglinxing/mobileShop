<template>
  <!--首页 商品描述-->
  <div class="goods-dec">
    <div
      class="goods-container"
      v-for="(item, index) in 10"
      :key="index"
      @click="handleGoods(item, index)"
    >
      <!--商品图片-->
      <div class="img">
        <van-image width="8rem" height="8rem" :src="img" />
      </div>

      <!--商品描述-->
      <div class="des">
        <div class="title-des">
          <span class="title">京东物流</span>
          <span class="g-des"
            >SanDisk闪迪存储卡TF卡手机行车记录仪内存卡microtf卡Class10等级A1性能
            A1 class10 400G</span
          >
        </div>
        <!--优惠券-->
        <!-- <div class="coupon">领券满99减10</div> -->
        <div class="price">
          ¥<span>{{ goodsPrice }}</span
          >.00
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      img:
        "//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/151725/6/2519/92318/5f8b16dbE9b75aeb4/7111d0710dd5b923.jpg!q70.dpg.webp",
      goodsPrice: "666",
    };
  },

  methods: {
    /**点击商品 */
    handleGoods(item, index) {
      Toast(item + 500);
    },
  },
};
</script>

<style lang="scss" scoped>
$boxSizing: border-box;
.goods-dec {
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .goods-container {
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0.4rem 0.3rem;
    .img {
      margin: 0.5rem 0;
    }

    .des {
      width: 8rem;
      margin: 0.2rem;
      display: flex;
      flex-direction: column;
      .title-des {
        .title {
          font-size: 12px;
          background-color: #d44b54;
          color: #fff;
          padding: 0 0.2rem;
        }
        .g-des {
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 12px;
        }
      }

      .coupon {
      }

      .price {
        color: #fa2c19;
        font-size: 12px;
        span {
          font-size: 16px;
          margin: 0 0.1rem;
        }
      }
    }
  }
}
</style>