import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'one',
    component: () => import('../pages/one.vue')
  },
  {
    path: '/two',
    name: 'Two',
    component: () => import('../pages/two.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
// 权限之路由验证
// 返回为真，路由跳转，反之不会跳转
// router.beforeEach(async (to) => {
//   console.log(to)
//   // if () {
//   //     return;
//   // }
//   return true
// })
// 设置页面标题
// const setDocumentTitle = (title: string) => {
//   document.title = title || '***'
//   const ua = navigator.userAgent
//   const regex = /\bMicroMessenger\/([\d.]+)/
//   // 兼容
//   if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
//     const i = document.createElement('iframe')
//     i.src = '/favicon.ico'
//     i.style.display = 'none'
//     i.onload = () => {
//       setTimeout(() => {
//         i.remove()
//       }, 9)
//     }
//     document.body.appendChild(i)
//   }
// }
export default router
