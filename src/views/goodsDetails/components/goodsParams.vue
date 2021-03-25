<template>
  <!--商品参数-->
  <div class="goods-params">
    <ul class="product-param-list">
      <li class="list" v-for="(item, index) in goodsParamsList" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="prop">{{ item.prop }}</div>
      </li>
    </ul>

    <div class="btn">
      <button @click="goodsParamsFinish">完成</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsParamsList: [
        { title: "品牌", prop: "阿里巴巴" },
        { title: "型号", prop: "0236" },
        { title: "材质", prop: "其他" },
        { title: "产地", prop: "中国大陆" },
        { title: "省份", prop: "上海市" },
        { title: "地市", prop: "上海市浦东新区" },
        { title: "尺寸", prop: "如图" },
        { title: "颜色", prop: "如图" },
      ],
    };
  },
  methods: {
    /**点击完成 */
    goodsParamsFinish() {
      this.$emit("goodsParamsFinish");
    },
  },
};
</script>

<style lang="scss" scoped>
.goods-params {
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 200px;
  .product-param-list {
    width: 100%;
    .list {
      list-style: none;
      display: flex;
      padding: 0.7rem 0;
      .title {
        width: 20%;
        color: #999;
        text-align: center;
      }
      .prop {
        width: 80%;
        color: #333;
      }
    }
  }

  .btn {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    button {
      width: 90%;
      height: 2.2rem;
      font-size: 0.5rem;
      border-radius: 1.1rem;
      color: #fff;
      border: 0;
      background-image: linear-gradient(to right, #ff9000 0%, #ff5000 100%);
    }
  }
}
</style>