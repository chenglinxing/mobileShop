<template>
  <div class="index">
    <!--路由跳转-->
    <!--路由添加动画-->
    <transition name="transition-router">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>

    <van-tabbar v-model="active" route active-color="#ee0a24">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="qr-invalid" to="/menu">分类</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/news">消息</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
/*eslint-disable*/
// import {mapState, mapMutations, mapActions, mapGetters} from "vuex"
// require("@/api/mockData/Goods.js")
export default {
  data() {
    return {
      active: 0,
    };
  },
  // computed:{ //需用computed属性声明获取数据
  // 		datas(){
  // 			return this.$store.state.goodsList
  // 		},
  // 		// ...mapState(["data"])辅助函数用法
  // 	},
  methods: {
    // 加入购物车
    // ...mapMutations(['getGoods'])
  },
  created() {
    //启用vuex的请求mock数据方法
    // this.$store.dispatch('getGoodsList')
  },
};
</script>

<style scoped>
.transition-router-enter-active,
.transition-router-leave-active {
  /* transition: all 0.2s; */
  /* transform: translate3d(50%, 0, 0); */
}
</style>