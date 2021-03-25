<template>
  <!--商品 保障-->
  <div class="goods-guarantee">
    <ul class="guarantee-list">
      <li class="list" v-for="(item, index) in guaranteeList" :key="index">
        <div class="icon"><van-icon name="passed" color="#ffcab3" /></div>
        <div class="des">
          <div class="prop">{{ item.prop }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </li>
    </ul>

    <div class="btn">
      <button @click="goodsGuaranteeFinish">完成</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guaranteeList: [
        { prop: "付款后18小时内发货", desc: "" },
        { prop: "订单险", desc: "保险公司全程担保赔付该商品每笔交易的售后" },
        {
          prop: "7天无理由",
          desc:
            "满足7天无理由退换货申请的前提下，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费。",
        },
        {
          prop: "公益宝贝",
          desc:
            "购买该商品，每笔成交都会有相应金额捐赠给公益。感谢您的支持，愿公益的快乐伴随您每一天。",
        },
        { prop: "蚂蚁花呗" },
        { prop: "信用卡支付" },
        { prop: "集分宝" },
      ],
    };
  },
  methods: {
    /**点击完成 */
    goodsGuaranteeFinish() {
      this.$emit("goodsGuaranteeFinish");
    },
  },
};
</script>

<style lang="scss" scoped>
.goods-guarantee {
  overflow: auto;
  box-sizing: border-box;
  padding-top: 20px;
  padding-bottom: 150px;
  .guarantee-list {
    width: 100%;
    .list {
      list-style: none;
      display: flex;
      padding: 0.7rem 0;
      .icon {
        width: 20%;
        text-align: center;
      }
      .des {
        width: 80%;
        color: #999;
      }
    }
  }

  .btn {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    button {
      width: 90%;
      height: 2.2rem;
      font-size: 0.15rem;
      border-radius: 1.1rem;
      color: #fff;
      border: 0;
      background-image: linear-gradient(to right, #ff9000 0%, #ff5000 100%);
    }
  }
}
</style>