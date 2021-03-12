<template>
  <div class="swipe">
    <van-swipe
      :autoplay="autoplay"
      :indicator-color="indicatorColor"
      :width="width"
    >
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="swipe-img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
/*eslint-disable*/
import { Lazyload } from "vant";
export default {
  props: {
    /**轮播间隔 */
    autoplay: {
      type: Number,
      default: () => 2000,
    },
    /**指示器颜色 默认白色 */
    indicatorColor: {
      type: String,
      default: () => "red",
    },
    width: {
      type: String,
      default: () => "80%",
    },
  },
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.index {
  .swipe-img {
      width: 100%;
    height: 200px;
  }
}
</style>