<template>
  <div class="index">
    <!--头部导航栏-->
    <div class="tab-header">
      <tab-header :isShowHeaderTop2="isShowHeaderTop2">
        <div class="top2" slot="top">
          <div class="signIn" @click="signIn">
            <span>签到</span>
          </div>
          <div class="center">
            <!-- <img :src="logo" alt="" /> -->
          </div>
          <div class="notify" @click="handleNotify">
            <span>消息</span>
          </div>
        </div>
        <div slot="bottom" class="bottom">
          <van-search
            v-model="searchValue"
            placeholder="请搜索商品"
            :background="background"
          />
        </div>
      </tab-header>
    </div>
    <!-- <svg class="icon svg-icon" aria-hidden="true">
      <use xlink:href="#icon-pinduoduo1"></use>
    </svg> -->
    <!--下拉刷新-->
    <b-scroll
      ref="scroll"
      :probeType="3"
      :pullUpload="true"
      @scroll="handleScrollContent"
      @loadMore="loadMore"
      class="b-scroll"
      :class="{
        'has-scroll': !isShowHeaderTop2,
        'no-scroll': isShowHeaderTop2,
      }"
    >
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!--轮播图-->
        <swipe-pic class="swipe-pic"></swipe-pic>

        <!--菜单内容-->
        <div class="menu-control">
          <menu-control></menu-control>
        </div>

        <!--瀑布流-->
        <!-- <water-fall-flow class="water-fall-flow" :pictureList="pictureList" /> -->

        <!--商品列表内容-->

        <div class="goods-list-content">
          <goods-dec></goods-dec>
        </div>
        <!-- <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image
              v-for="(item, index) in 20"
              :key="index"
              src="https://img.yzcdn.cn/vant/apple-3.jpg"
            />
          </van-grid-item>
          <van-grid-item>
            <van-image
              v-for="(item, index) in 20"
              :key="index"
              src="https://img.yzcdn.cn/vant/apple-2.jpg"
            />
          </van-grid-item>
        </van-grid> -->
      </van-pull-refresh>
    </b-scroll>

    <!--回到顶部-->
    <back-top @click="backTop" v-if="isShowBackTop"></back-top>

    <!--底部信息-->
    <div class="bottom-msg" v-show="scrollToEnd">
      <span>已经到底了~</span>
    </div>
    <!--备案信息-->
    <!-- <div class="bn-info">
      <div class="first-info">Copyright© 2020 chenglinxing.cn 版权所有</div>
      <div class="second-info">
        <a href="https://beian.miit.gov.cn">鄂ICP备2021000154号</a>
      </div>
    </div> -->
  </div>
</template>

<script>
/*eslint-disable*/
import { Toast, Notify } from "vant";
import BScroll from "@c/scroll.vue";

export default {
  data() {
    return {
      headerTitle: "标题1",
      searchValue: "", //搜索框内容
      content: 20,
      isLoading: false,
      background: "#fff",
      logo:
        "//gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp",
      pictureList: [
        {
          img_url:
            "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/164353/10/12714/126518/60531cffEd74f198e/a06d9afd19f5464c.jpg!q70.jpg.dpg",
        },
        {
          img_url:
            "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/155887/8/16711/104572/60534627Eb979dc75/cc416de39d2e83b0.jpg!cr_1125x445_0_171!q70.jpg.dpg",
        },
        ,
      ],
      isShowBackTop: false, //默认隐藏回到顶部图标
      isShowHeaderTop2: true, //默认显示headerTop2
      contentOffsetTop: 0, //滚动区域距离顶部的距离
      scrollToEnd: false, //滚到底 提示
    };
  },
  components: {
    TabHeader: () => import("@c/header"),
    MenuControl: () => import("./components/menuControl"), //grid菜单
    SwipePic: () => import("@c/swipe"), //轮播图
    BScroll, //滚动条
    // WaterFallFlow: () => import("@c/waterFallFlow"),
    BackTop: () => import("@c/backTop"), //回到顶部
    goodsDec: () => import("./components/goodsDes"),
  },
  methods: {
    /**点击签到 */
    signIn() {
      Toast.success("签到成功");
      console.log(this.$refs.scroll, "ssss");
    },

    /**点击消息 */
    handleNotify() {
      Toast("点击消息");
      // this.$router.push("/news");
    },

    /**图片点击 */
    picClick() {
      Notify("图片点击");
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },

    //滚动事件  获取x、y轴的值
    handleScrollContent(position) {
      //1. 是否显示backTop图标
      this.isShowBackTop = Math.abs(position.y) > 700 ? true : false;
      // console.log(position);

      //2.当下拉的高度超过 44px 则隐藏 header中的签到消息
      if (position.y < 0) {
        this.isShowHeaderTop2 = Math.abs(position.y) > 44 ? false : true;
      }

      //3.当下拉的高度超过2580px 则提示已经到底了
      if (position.y < 0) {
        this.scrollToEnd = Math.abs(position.y) > 1000 ? true : false;
      }
    },
    //下拉
    loadMore() {},

    //回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
      console.log(this.$refs);
      console.log(this.$refs.scroll);
    },
  },
  // activated() {
  //   if (this.$refs.scroll) {
  //     this.$refs.scroll.scrollTo(0, this.saveScrollY);
  //     this.$refs.scroll.refresh();
  //   }
  // },
  created() {},
  mounted() {
    console.log(this.$refs.scroll.$el.offsetTop);
    //获取滚动区域距离顶部的距离
    this.contentOffsetTop = this.$refs.scroll.$el.offsetTop;
  },
};
</script>

<style lang="scss" scoped>
.index {
  // position: relative;
  // height: 100vh;
  // display: flex;
  // flex-direction: column;
  box-sizing: border-box;
  .tab-header {
    color: #fff;
    .top2 {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      .signIn,
      .notify {
        width: 60px;
        color: #ff852a;
        // margin: 0 0.5rem;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // span {
        //   font-weight: 700;
        //   padding-left: 0.1rem;
        // }
      }
      .center {
        flex: 1;
        margin: 0 5px;
        img {
          width: 50%;
          height: 50%;
        }
      }
    }

    .bottom {
      /deep/.van-search__content {
        border-radius: 2rem;
        border: 2px solid #ff852a;
      }
    }
  }

  // .swipe-pic,
  .menu-control {
    margin: 10px 0;
  }

  .b-scroll {
    position: absolute;
    left: 0;
    right: 0;
    // top: 100px;
    bottom: 50px;
    overflow: hidden;
  }

  .no-scroll {
    top: 100px;
  }

  .has-scroll {
    top: 54px;
  }

  .bn-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bottom-msg {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    // top: calc(100vh - 80px);
    bottom: 55px;
    color: red;
  }
}

.van-pull-refresh {
  // position: absolute;
  // margin-top: 50px;
}
</style>