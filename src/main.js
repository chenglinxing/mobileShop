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

/**创建过滤器  用于字典值的转换 */
Vue.filter("divValueConversion", function (val, dicList) {
  if (!(Array.isArray(dicList) && dicList.length > 0)) return false
  const target = dicList.filter(i => {
    return i.key = val
  })
  return target.length ? target[0].label : val
})

/**自定义指令  用于用户在未登录的情况下，点击消息或立即购物等按钮直接跳转到登录页 */
// Vue.directive("nologin", {
//   // inserted(el, binding, vnode) {
//   //   console.log(el, binding, vnode)
//   // }
//   inserted(el,binding,vnode){
//     el.style.color="#fff"
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
