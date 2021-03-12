import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from "vant"
import './styles/index.scss'
import "vant/lib/index.css"
import "./assets/icon/iconfont.css"  //引入阿里icon
import "./assets/icon/iconfont.js"

// const path = require("path")
// console.log(__dirname,path.join(__dirname), path,'path')
// console.log(process.env.BASE_URL, 'process.env.BASE_URL')

import { Lazyload } from "vant"
// import axios from "axios"

import "./router/beforeRoute.js"
// require("@/api/mockData/Goods.js")

Vue.config.productionTip = false

Vue.use(vant)
Vue.use(Lazyload, {
  lazyComponent: true,
});
/**创建事件总线 */
const eventBus = new Vue()
Vue.prototype.$bus = eventBus
// console.log(process.env.BASE_URL,'process.env.BASE_URL')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
