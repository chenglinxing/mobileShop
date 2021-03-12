<template>
  <div class="nar-bar">
    <div class="top" :class="{ animate: isShowHeaderTop2 == false }">
      <slot name="top">
        <!-- <div class="left"><slot name="left" /></div>
        <div class="center"><slot name="center" /></div>
        <div class="right"><slot name="right" /></div> -->
      </slot>
    </div>

    <div>
      <slot name="bottom" class="bottom" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    isShowHeaderTop2: {
      type: Boolean,
      default: () => true,
    },

    /**默认展示header的bottom */
    // showBottom: {
    //   type: Boolean,
    //   default: () => true,
    // },
  },
};
</script>

<style lang="scss" scoped>
.nar-bar {
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  background-color: #ff0036;
  position: sticky;
  // top: 100px;

  .top {
    height: 44px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .bottom {
    height: 56px;
  }

  .animate {
    height: 0px;
    transition: 0.5s;
  }
}
</style>