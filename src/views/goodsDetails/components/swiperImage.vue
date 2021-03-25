<template>
  <!--图片轮播-->
  <div class="swiper-image">
    <van-swipe
      @change="onChange"
      :autoplay="autoplay"
      :initial-swipe="initialSwipe"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="(item, index) in goodsImageList"
        :key="index"
        @click="handCLick(index)"
      >
        <img v-lazy="item.goodsImage" />
      </van-swipe-item>

      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/{{ goodsImageList.length }}
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
import { ImagePreview, Toast } from "vant";
export default {
  props: {
    goodsImageList: {
      type: Array,
      default: () => [],
    },
    autoplay: {
      type: Number,
      default: () => 3000,
    },
  },
  data() {
    return {
      current: 0,
      indicatorColor:"#ff0036",//指示器颜色
      initialSwipe: 0, //轮播图默认显示位置
      previewCurrentIndex: 0, //图片预览的索引
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },

    handCLick(index) {
      // console.log(index, this.goodsImageList, "index");
      let imageList = [];
      for (const i of this.goodsImageList) {
        imageList.push(i.goodsImage);
      }
      ImagePreview({
        images: imageList, // 预览图片的那个数组
        showIndex: true,
        loop: false,
        startPosition: index, // 指明预览第几张图

        //切换图片时的回调函数，回调参数为当前索引
        onChange(i) {
          this.previewCurrentIndex = i;
        },
        onClose() {
          // Toast("关闭");
          //预览完后  获取预览
          this.initialSwipe = this.previewCurrentIndex;
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-image {
  .van-swipe-item {
    height: 15rem;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 15px;
    background: transparent;
    color: #fff;
  }
}
</style>