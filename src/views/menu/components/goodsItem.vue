<template>
  <div class="goods-item-index">
    <div
      class="goods"
      v-for="(item, index) in dataSecondList"
      :key="index"
      @click="goGoodsList(item.goodsThirdCategoryId)"
    >
      <img :src="item.goodsSecondCategoryImage" alt="" />
      <span>{{ item.goodsSecondCategoryName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataSecondList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goGoodsList(id) {
      console.log(id);
      /**将商品三级分类传出 */
      // this.dataSecondList.forEach((i) => {
      //   if (i.goodsCategorySecondId == id) {
      //     // console.log(i.goodsThirdList, "goodsThirdList");
      //     //使用事件总线拿到值后赋补上
      //     // this.$bus.$emit("goodsThirdList", i.goodsThirdList);
      //     window.localStorage.setItem("goodsThirdList",JSON.stringify(i.goodsThirdList))
      //   }
      // });
      this.$router.push({
        path: "/goodsList",
        query: {
          goodsCategoryId: id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// .goods-item-index {
//   display: flex;
//   flex-wrap: wrap;
//   // justify-content: center;
//   .goods {
//     width: 33.33%;
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     // margin: 10px;
//     img {
//       width: 4.55rem;
//       margin-bottom: 0.11rem;
//     }
//     span {
//       text-align: center;
//       font-size: 12px;
//       color: #333333;
//     }
//   }
// }
.goods-item-index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .goods {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
  }
  span {
    text-align: center;
    font-size: 12px;
    color: #333333;
  }
}
</style>