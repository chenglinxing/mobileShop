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
        "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/155887/8/16711/104572/60534627Eb979dc75/cc416de39d2e83b0.jpg!cr_1125x445_0_171!q70.jpg.dpg",
        "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/167245/17/13432/149823/60540ceeE0a928512/677088217d8a00aa.jpg!q70.jpg.dpg",
        "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/164353/10/12714/126518/60531cffEd74f198e/a06d9afd19f5464c.jpg!q70.jpg.dpg",
        "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/171591/12/14556/125082/605ae3ebE0d7a85da/0e8b3af8f39f4acf.jpg!q70.jpg.dpg",
        "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/156668/17/17839/93654/605b1f1bE6b787e58/6b945aef0ef809b5.jpg!q70.jpg.dpg",
        "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/165129/3/12077/201908/604ee3dbE70136b52/409392ccb503997c.jpg!q70.jpg.dpg",
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