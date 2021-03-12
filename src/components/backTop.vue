<template>
  <div class="back-top">
    <div
      class="content"
      :style="{
        'background-color': backTopBgColor,
        width: backTopWidth,
        height: backTopHeight,
        color: color,
      }"
      @click="backTop"
    >
      <van-icon :size="iconSize + 'px'" :name="iconName" />
      <span :style="{ 'font-size': size + 'px' }">{{ backTopName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //回到顶部的名称
    backTopName: {
      type: String,
      default: () => "TOP",
    },
    //背景颜色
    backTopBgColor: {
      type: String,
      default: () => "#ff0036",
    },
    //最外层的宽度
    backTopWidth: {
      type: String,
      default: () => "50px",
    },
    //最外层的高度
    backTopHeight: {
      type: String,
      default: () => "50px",
    },
    //字体大小
    size: {
      type: Number,
      default: () => 15,
    },
    //字体颜色
    color: {
      type: String,
      default: () => "#fff",
    },
    //icon
    iconName: {
      type: String,
      default: () => "arrow-up",
    },
    //icon的大小
    iconSize: {
      type: Number,
      default: () => 20,
    },
  },
  methods: {
    backTop() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.back-top {
  position: absolute;
  right: 25px;
  bottom: 100px;
  .content {
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>