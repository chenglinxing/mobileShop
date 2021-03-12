<template>
  <!--图片轮播-->
  <div class="swiper-image">
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(item, index) in goodsImageList" :key="index">
        <img v-lazy="item.goodsImage" />
      </van-swipe-item>

      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    goodsImageList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-image {
  .van-swipe-item {
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
  }
}
</style>