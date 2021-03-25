<template>
  <div class="index">
    <!--加载-->
    <!--header-->
    <tab-header>
      <div class="top" slot="top">
        <div class="goods-category-name">商品分类</div>
      </div>
    </tab-header>

    <!-- <van-loading class="van-loading"  v-show="loading"/> -->

    <van-loading size="24px" color="red" vertical v-show="loading"
      >加载中...</van-loading
    >
    <div class="center">
      <!--侧边栏-->
      <van-sidebar
        class="van-sidebar"
        v-model="activeTitle"
        @change="handleIndex"
        v-show="!loading"
      >
        <b-scroll
          ref="scroll"
          :probeType="3"
          :pullUpload="false"
          class="b-scroll"
        >
          <van-sidebar-item
            v-for="(item, index) in titleList"
            :key="index"
            :title="item.title"
          />
        </b-scroll>
      </van-sidebar>

      <!--右边商品分类数据-->
      <div class="goods-category" v-show="!loading">
        <div class="goods-category-name">{{ goodsSecondTerm }}</div>
        <goods-item :dataSecondList="dataSecondList"></goods-item>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@c/scroll.vue";
import { goodsFirstList, goodsSecondList } from "@/api/getGoods";

export default {
  components: {
    BScroll,
    TabHeader: () => import("@c/header"),
    goodsItem: () => import("./components/goodsItem"),
  },
  data() {
    return {
      activeTitle: 0,
      currentIndex: 0, //当前侧边栏的索引
      loading: false, //加载
      dataList: [], //获取所有的数据
      dataListMock: [],
      titleList: [], //商品一级分类
      goodsSecondList: [], //商品二级分类
      goodsSecondTerm: "", //商品二级分类的总称
      dataSecondList: [],
    };
  },

  methods: {
    handleIndex(index) {
      console.log(index);
      //获取一级商品分类id
      this.currentIndex = index + 1;
      //根据一级商品分类id获取二级商品分类id
      let goodsSecondCategoryId;
      this.dataSecondList = [];
      // console.log(this.dataList, "111");
      //调接口  获取二级
      this.initSecondCategory();
      this.dataList.forEach((i) => {
        /**拿到商品二级分类id */
        if (Number(this.currentIndex) == Number(i.goodsFirstCategoryId)) {
          //二级分类id
          goodsSecondCategoryId = i.goodsSecondCategoryId;
          //获取二级分类总称
          this.goodsSecondTerm = i.goodsSecondTerm;
        }
      });

      this.goodsSecondList.forEach((i) => {
        if (Number(goodsSecondCategoryId) == i.goodsSecondCategoryId) {
          // console.log(i.data, "1");
          this.dataSecondList = i.data;
        }
      });
      // console.log(goodsSecondCategoryId,'goodsSecondCategoryId')
    },

    /**初始化一级菜单 */
    async init() {
      const { data } = await goodsFirstList();
      console.log(data, "一级分类");
      this.dataList = data;
      this.dataList.forEach((i) => {
        /**侧边栏数据 */
        let params = {
          key: i.goodsFirstCategoryId, //赋值key
          title: i.goodsFirstCategoryName, //赋值名称
        };
        this.titleList.push(params);
      });
      // /**默认商品二级分类 */
      this.goodsSecondTerm = this.dataList[0].goodsSecondTerm;
    },

    /**初始化二级分类 */
    async initSecondCategory() {
      const { data } = await goodsSecondList();
      /**赋值所有的二级分类 */
      this.goodsSecondList = data;
      /**默认取第一个二级分类 */
      this.dataSecondList = data[0].data;
      console.log(data, "二级分类");
    },
  },
  created() {
    this.init();
    this.initSecondCategory();
    /**当缓存中拿不到数据则调接口  否则直接取缓存中数据*/
    // if (localStorage.getItem("dataList") == null) {
    //   this.getList();
    // } else {
    //   this.dataList = JSON.parse(localStorage.getItem("dataList"));
    //   this.dataList.forEach((i) => {
    //     /**侧边栏数据 */
    //     let params = {
    //       key: i.goodsCategoryId, //赋值key
    //       title: i.goodsCategoryName, //赋值名称
    //     };
    //     this.titleList.push(params);
    //   });
    //   /**默认商品二级分类 */
    //   this.goodsSecondList = this.dataList[0].goodsCategoryBySecond;
    //   this.goodsSecondTerm = this.dataList[0].goodsSecondTerm;
    // }

    // if (localStorage.getItem("vuex") == null) {
    //   console.log(11);
    //   this.$store.dispatch("getGoodsList");
    // } else {
    //   // this.dataList = JSON.parse(window.localStorage.getItem("vuex")).dataList;
    //   console.log(22);
    // }
    // //加载
    // this.loading = true;
    // /**获取所有数据 */
    // this.dataList = JSON.parse(window.localStorage.getItem("vuex")).dataList;
    // //数据请求后  关闭加载
    // if (this.dataList.length > 0) {
    //   this.loading = false;
    //   this.dataList.forEach((i) => {
    //     /**侧边栏数据 */
    //     let params = {
    //       key: i.goodsCategoryId, //赋值key
    //       title: i.goodsCategoryName, //赋值名称
    //     };
    //     this.titleList.push(params);
    //   });
    //   /**默认商品二级分类 */
    //   this.goodsSecondList = this.dataList[0].goodsCategoryBySecond;
    //   this.goodsSecondTerm = this.dataList[0].goodsSecondTerm;
    // }
  },
};
</script>

<style lang="scss" scoped>
.index {
  // overflow: auto;
  position: relative;
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .van-loading {
    width: 100%;
    height: 100%;
  }
}

.van-sidebar {
  height: calc(100vh - 94px);
  background-color: #f7f8fa;
}

.b-scroll {
  width: 5rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0px;
  overflow: hidden;
}

::-webkit-scrollbar {
  display: none;
}

.center {
  display: flex;
}

.goods-category {
  width: calc(100% - 5rem);
  background-color: #fff;

  .goods-category-name {
    text-align: center;
    padding: 8px 0;
    color: #333333;
  }
}

.van-loading {
  position: absolute;
  top: 300px;
  // left: 50%;
  // transform: translate(-50%,-50%);
  // z-index: 999999;

  // top:0;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // margin: auto;
  // font-size: 22px;
}
</style>