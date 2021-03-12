import axios from "axios"

let url = window.location.origin
const service = axios.create({
    baseURL: url,
    timeout: 50000
})

/**请求拦截 */
service.interceptors.request.use(
    config => {
        return config
    },
    err => {
        Promise.reject(err)
    }
)

/**响应拦截 */
// service.interceptors.response.use(
//     response => {
//         const res = res.code
//         const codeList = [500, 404, 401, 400]
//         if (!codeList.includes(res)) return response
//         return response
//     },
//     err => {
//         return Promise.reject(err)
//     }
// )

/**GET请求 */
service.get = (request) =>
    new Promise((resolve, reject) => {
        service({
            ...request,
            method: 'get'
        })
            .then(res => { resolve(res.data) })
            .catch(err => { reject(err) })
    })

/**POST请求 */
service.post = (request) =>
    new Promise((resolve, reject) => {
        service({
            ...request,
            method: "post"
        })
            .then(res => { resolve(res.data) })
            .catch(err => { reject(err) })

    })

export default service