import router from "./index"

// console.log(window.localStorage.getItem('user'))
router.beforeEach((to, from, next) => {
    if (to.path == "/login") {
        next()
    } else {
        if (window.localStorage.getItem('user') != null) {
            next()
        } else {
            next("/login")
        }
    }
})
