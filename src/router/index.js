import Vue from 'vue'
import VueRouter from 'vue-router'
// import test from '@/views/test.vue'
// import login from '@/views/login.vue'


Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      name: "test",
      path: '/test',
      component: () => import('@/views/test')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login')
    }
  ]
})

export default router
