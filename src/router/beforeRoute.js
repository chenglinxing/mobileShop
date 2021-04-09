import store from "../store"
import router from "./index"

/**1.判断用户是否登录  假设未登录不能将商品加入购物车
 * 2.
*/
// router.beforeEach((to, from, next) => {
//     console.log(to.path, store.state.userLogin.login)
//     if (!store.state.userLogin.login) {
//         next({ path: "/login" })
//         console.log(1)
//     } else {
//         next()
//         console.log(2)
//         // if (window.localStorage.getItem('user') != null) {
//         //     next()
//         // } else {
//         //     // next("/login")
//         // }
//     }
// })
