<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      observeDOM: true,
      probeType: this.probeType, //只有是滚动就侦测
      pullUpLoad: this.pullUpLoad, //上拉加载
    //   pullDownRefresh:{
    //       threshold:50,
    //       stip:20
    //   },//下拉刷新
    });

    // 2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
      // console.log(position,'pp')
    });

    //下拉加载更多
    this.scroll.on("pullingUp", () => {
      console.log("下拉加载更多");
      setTimeout(() => {
        //当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
        this.scroll.finishPullUp();
      }, 2000);
    });

   

    // 3.监听下拉
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("loadMore");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    // 获取滚动的距离
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

