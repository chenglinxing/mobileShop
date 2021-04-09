<template>
  <!--购物车-->
  <div class="shopping-cart-index">
    <div class="header-title">
      <span class="title">购物车</span>
      <span class="send-location" @click="sendingLocation">
        <van-icon name="location-o" />
      </span>
    </div>

    <!--当购物车无添加商品时  显示空状态-->
    <div class="shopping-card-empty" v-if="cartList.length == 0">
      <van-empty image="https://img.yzcdn.cn/vant/empty-image-search.png">
        <div class="description" slot="description">
          <span>购物车竟然空荡荡的~</span>
        </div>
      </van-empty>
    </div>

    <!--商品列表-->
    <div class="goods-list" v-if="cartList.length > 0">
      <goods-cart-list />
    </div>
  </div>
</template>

<script>
export default {
  components: { goodsCartList: () => import("@c/goodsCartList") },
  data() {
    return {
      cartList: this.$store.state.shoppingCartList,
    };
  },
  methods: {
    /**点击位置 */
    sendingLocation() {},
  },
};
</script>

<style lang="scss" scoped>
$boxSizing: border-box;

.shopping-cart-index {
  box-sizing: $boxSizing;
  .header-title {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #ff852a;
    position: sticky;
    top: 0;
    span {
      padding: 0 0.3rem;
    }
  }
}

.goods-list {
  height: calc(100vh - 144px);
  overflow: auto;
}
</style>