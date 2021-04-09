<template>
  <!--商品详细信息-->
  <div class="details-info">
    <van-skeleton title :row="3" :loading="detailsInfoloading">
      <div class="details-info-operate">
        <!--商品价格及操作相关-->
        <div class="details-price-operate">
          <div class="price">
            <span>¥</span>
            <span>{{ goodsIntroduction.goodsItdPrice }}</span>
          </div>

          <div
            class="operate"
            @click="collectionGoods"
            :class="{ collection: isCollection }"
          >
            <van-icon name="gift-o" />
            <span>收藏</span>
          </div>
        </div>

        <!--商品名称及描述-->
        <div class="goods-name-des">
          <span>{{ goodsIntroduction.goodsItdName }}</span>
          <span>{{ goodsIntroduction.goodsItdDec }}</span>
        </div>

        <!--推荐  帮我选  分享-->
        <div class="other">
          <span @click="recommend"><van-icon name="like-o" /><i>推荐</i></span>
          <span @click="helpMeChoose"
            ><van-icon name="friends-o" /><i>帮我选</i></span
          >
          <span @click="share"><van-icon name="share-o" /><i>分享</i></span>
        </div>
      </div>
    </van-skeleton>

    <!--商品选择-->
    <div class="goods-choice">
      <!--选择-->
      <div class="choice">
        <div class="left">
          <span>选择</span>
        </div>
        <div class="right">
          <div class="top">
            <span>颜色分类</span>
            <span><van-icon name="arrow" /></span>
          </div>
          <div class="bottom">
            
          </div>
        </div>
      </div>

      <!--发货-->
      <div class="deliver-goods">
        <div class="left">
          <span>发货</span>
        </div>
        <div class="right">
          <div class="top">
            <span>上海市</span>
            <span><i>月销100+</i><van-icon name="arrow" /></span>
          </div>
          <div class="bottom">
            <span>配送至武汉</span>
          </div>
        </div>
      </div>

      <!--保障-->
      <div class="guarantee" @click="openGuarantee">
        <div class="left">
          <span>保障</span>
        </div>
        <div class="right">
          <span>付款后48小时内发货 ▪订单险 ▪7天无理由</span>
          <span><van-icon name="arrow" /></span>
        </div>
      </div>

      <!--参数-->
      <div class="goods-params" @click="openGoodsParams">
        <div class="left">
          <span>参数</span>
        </div>
        <div class="right">
          <span>产地 是否手工...</span>
          <span><van-icon name="arrow" /></span>
        </div>
      </div>

      <!--保障面板-->
      <van-action-sheet v-model="isGuarantee">
        <goods-guarantee @goodsGuaranteeFinish="goodsGuaranteeFinish" />
      </van-action-sheet>

      <!--参数 动作面板-->
      <van-action-sheet v-model="isGoodsParams" title="产品参数">
        <goods-params @goodsParamsFinish="goodsParamsFinish" />
      </van-action-sheet>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import throttle from "lodash.throttle";
export default {
  props: {
    goodsIntroduction: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    goodsIntroduction(newVal) {
      newVal.goodsItdPrice = newVal.goodsItdPrice;
    },
  },
  components: {
    goodsParams: () => import("./goodsParams"),
    goodsGuarantee: () => import("./goodsGuarantee"),
  },
  data() {
    return {
      isCollection: false, //是否收藏商品 默认不收藏
      detailsInfoloading: true, //商品信息区域  添加骨架屏
      isGoodsParams: false, //默认隐藏参数
      isGuarantee: false, // 默认隐藏保障
    };
  },
  methods: {
    /**点击收藏 */
    collectionGoods: throttle(function () {
      this.isCollection = !this.isCollection;
      if (this.isCollection) {
        Toast("宝贝收藏成功!");
      } else {
        Toast("取消收藏~");
      }
    }, 1000),

    /**推荐 */
    recommend: throttle(function () {
      Toast("推荐");
    }, 1500),

    /**帮我选 */
    helpMeChoose: throttle(function () {
      Toast("帮我选");
    }, 1500),

    /**分享 */
    share: throttle(function () {
      Toast("分享");
    }, 1500),

    /**点击保障 */
    openGuarantee() {
      this.isGuarantee = true;
    },

    /**关闭保障面板的回调 */
    goodsGuaranteeFinish() {
      this.isGuarantee = false;
    },

    /**点击参数 */
    openGoodsParams() {
      this.isGoodsParams = true;
    },

    /**关闭参数面板的回调 */
    goodsParamsFinish() {
      this.isGoodsParams = false;
    },
  },

  created() {
    this.detailsInfoloading = false;
    // Object.keys(this.goodsIntroduction).length > 0 ? false : true;
  },
};
</script>

<style lang="scss" scoped >
@mixin basicStyle {
  width: 96%;
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 0.5rem;
  box-sizing: border-box;
  margin: 0.5rem auto;
  font-size: 14px;
}

.details-info-operate {
  @include basicStyle;
  .details-price-operate {
    height: 4rem;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    justify-content: space-between;
    .price {
      span {
        color: red;
        margin: 0 0.2rem;
      }
      span:first-child {
        font-size: 14px;
      }

      span:last-child {
        font-size: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
    }

    .operate {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 12px;
      }
    }
  }

  .goods-name-des {
    margin: 0 1rem;
    span:first-child {
      margin-right: 0.5rem;
    }

    span:last-child {
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 0.8rem 0;
    }
  }

  .other {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}

.goods-choice {
  @include basicStyle;
  .choice,
  .deliver-goods,
  .guarantee,
  .goods-params {
    display: flex;
    align-self: flex-start;
    box-sizing: border-box;
    width: 100%;
    margin: 0.8rem 0;
  }
  .left {
    width: 2.2rem;
    margin: 0 9px;
    color: rgb(153, 153, 153);
  }

  .right {
    margin: 0 9px;
    width: calc(100% - 2.2rem);
    .top {
      color: #222;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: block;
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
    }
  }

  .guarantee,
  .goods-params {
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

.collection {
  color: red;
}
</style>