<template>
  <!--单元格-->
  <div class="cell-index">
    <!--特殊单元格-->
    <div class="special-cell">
      <!--特殊单元格左边-->
      <slot name="special">
        <div class="left">
          <slot name="left" />
        </div>
        <!--特殊单元格右边-->
        <div class="right">
          <slot name="right" />
        </div>
      </slot>
    </div>

    <!--普通单元格-->
    <div class="ordinary-cell">
      <slot name="ordinary"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cell-index {
  box-sizing: border-box;

  .special-cell {
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
    padding: 0.4rem;
    margin-bottom: 1rem;
  }

  .ordinary-cell {
    height: 2.7rem;
    background-color: #fff;
    margin-bottom: 1rem;
    text-align: center;
    line-height: 2.7rem;
  }
}
</style>