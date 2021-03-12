


<template>
  <div class="index"></div>
</template>

<script>
/*eslint-disable*/
import { dateFormat } from "@u/dateFormat";
export default {
  components: {
    HeaderTitle: () => import("@c/title"),
  },
  data() {
    return {
      title: "",
      day: null,
      hour: null,
      minute: null,
      second: null,

      date: "",
      show: false,
    };
  },
  methods: {
    returnLogin() {
      this.$router.push("/login");
      window.localStorage.removeItem("user");
    },
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
.index {
  .header-title {
    text-align: center;
  }
  .time-remaining {
    width: 80%;
    height: 6rem;
    // border: 1px solid red;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin: 0 5px;
    }
    .num {
      width: 40px;
      height: 50px;
      color: #fff;
      background: #1989fa;
      border-radius: 5px;
      text-align: center;
      line-height: 50px;
    }
    .txt {
      font-weight: 700;
      color: #1dcca6;
    }
  }
}
</style>