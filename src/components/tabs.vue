<template>
  <div class="tabs">
    <van-tabs v-model="active">
      <van-tab
        v-for="item in tableList"
        :key="item.key"
        :title="item.title"
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default: () => 1,
    },
    tabsList: Array,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>