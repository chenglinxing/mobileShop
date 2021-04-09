import Vue from 'vue'
import Vuex from 'vuex'
import { getGoodsDetailsList } from "@/api/getGoods"
import axios from "axios"
import mockData from "@/api/mockData/Goods.js"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: [],//请求的所有数据
    //商品侧边栏数据  一级
    shoppingCartList: [], //购物车数据
    userLogin: {
      login: false
    },//用户登录信息
    shopNameList: {
      0: "京东直营店",
      1: "少放辣",
      2: "今天专卖店",
      3: "别放香菜"
    }//商店id及名称
  },
  getters: {
    dataList: state => state.dataList, //所有的数据
  },
  mutations: {
    getGoods(state, data) {
      state.dataList = data
    },
    /**校验用户登录 */
    loginFinish(state, data) {
      state.userLogin.login = true
    }
  },
  actions: {
    getGoodsList({ commit }) {
      // const { data } = await getGoodsDetailsList()
      // console.log(data, 'shuju')
      axios({
        url: "/goodsCategoryData",
        method: "get",
      }).then(res => {
        console.log(res.data.data, 'vuex')
        commit('getGoods', res.data.data)
      })

    }
  },
  modules: {
  },
  plugins: [createPersistedState({})]
})
