import router from '../router'
export default {
    /**自定义指令  用于用户在未登录的情况下，点击消息或立即购物等按钮直接跳转到登录页 */
    inserted(el, binding, vnode) {
        el.className = "nologin";
        console.log(el.className, binding, vnode)

        const { login } = binding.value
        console.log(login)
        el.addEventListener('click', (e) => {
            e.target.className = "nologin"
            console.log(e)
            /**如果login为false 则点击后跳转登录页 */
            // console.log(e.target.className== "nologin",'e.target.className')
            if (!login) {
                router.push("/login")
                return true
            } else {
                console.log("false")
            }
        })
    },
}